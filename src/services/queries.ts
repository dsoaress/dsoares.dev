import Prismic from '@prismicio/client'
import { AxiosError } from 'axios'
import { GetStaticPropsContext } from 'next'
import { RichText } from 'prismic-dom'
import readingTime from 'reading-time'

import { formatDate } from '@/lib/formatDate'
import { PostType } from '@/types/post'
import { ProjectType } from '@/types/project'

import { github } from './github'
import { getPrismicClient } from './prismic'

export async function getAllProjects({ locale }: GetStaticPropsContext) {
  const prismic = getPrismicClient()

  if (!locale) throw new Error('locale is not defined')

  const response = await prismic.query([Prismic.predicates.at('document.type', 'project')], {
    pageSize: 6,
    lang: locale
  })

  const projects: (ProjectType | undefined)[] = await Promise.all(
    response.results.map(async project => {
      if (!project.data.repo) {
        return
      }

      try {
        const { data: repo } = await github.get(project.data.repo)

        return {
          id: project.id,
          title: project.data.title,
          description: project.data.description,
          tags: project.tags.join(', '),
          repositoryUrl: repo.html_url,
          repo: project.data.repo,
          stars: repo.stargazers_count,
          cover: project.data.cover.url
        }
      } catch (error) {
        const { response } = error as AxiosError

        const errorMessage = {
          repository: project.data.repo,
          ...response?.data
        }

        console.log('error:', errorMessage)
        return
      }
    })
  )

  return projects.filter(item => item != null)
}

export async function getAllPosts({ locale }: GetStaticPropsContext) {
  const prismic = getPrismicClient()

  if (!locale) throw new Error('locale is not defined')

  const response = await prismic.query([Prismic.predicates.at('document.type', 'post')], {
    pageSize: 6,
    lang: locale
  })

  const posts: PostType[] = response.results.map(post => {
    const content = RichText.asHtml(post.data.content)

    return {
      id: post.id,
      title: post.data.title,
      description: post.data.description,
      slug: post.uid as string,
      cover: post.data.cover.url,
      date: formatDate(post.data.date, locale),
      readingTime: Math.floor(readingTime(content).minutes)
    }
  })

  return posts
}

export async function getSinglePost({ params, locale }: GetStaticPropsContext) {
  const prismic = getPrismicClient()

  if (!params?.post) throw new Error('slug is not defined')
  if (!locale) throw new Error('locale is not defined')

  const response = await prismic.getByUID('post', params.post as string, {
    lang: locale
  })

  const content = RichText.asHtml(response.data.content)

  const post = {
    id: response.id,
    title: response.data.title,
    description: response.data.description,
    slug: response.uid as string,
    cover: response.data.cover.url,
    date: formatDate(response.data.date, locale),
    readingTime: Math.floor(readingTime(content).minutes),
    content
  }

  return post
}

export async function getPaths() {
  const prismic = getPrismicClient()

  const response = await prismic.query([Prismic.predicates.at('document.type', 'post')], {
    fetch: ['post.uid'],
    lang: '*',
    pageSize: 2000
  })

  const paths = response.results.map(post => ({
    params: { post: post.uid },
    locale: post.lang
  }))

  return paths
}
