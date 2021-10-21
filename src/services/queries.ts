import Prismic from '@prismicio/client'
import { GetStaticPropsContext } from 'next'
import { RichText } from 'prismic-dom'
import readingTime from 'reading-time'

import { formatDate } from '../lib/formatDate'
import { PostType } from '../types/post'
import { ProjectType } from '../types/project'
import { github, GitHubAPIType } from './github'
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
        const { data: repo } = await github.get<GitHubAPIType>(project.data.repo)

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
        const errorMessage = {
          repository: project.data.repo
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

export async function getInitialData(locale: string) {
  const prismic = getPrismicClient()

  const dataResponse = await prismic.query([Prismic.predicates.at('document.type', 'data')], {
    lang: locale
  })

  const response = dataResponse.results[0].data
  const faviconSizes = ['32', '48', '72', '96', '144', '192', '256', '384', '512']

  const data = {
    profile: {
      title: response.title,
      shortTitle: response.short_title,
      avatar: {
        image: response.avatar.url,
        placeholder: response.avatar.placeholder.url
      },
      description: response.description
    },
    umami: {
      domain: response.umami_domain,
      id: response.umami_id,
      src: response.umami_src
    },
    social: response.social_links.map((link: any) => {
      return {
        label: link.label,
        url: link.url.url
      }
    }),
    favicons: faviconSizes.map(size => {
      return {
        size,
        src: response.favicon[size].url
      }
    }),
    nav: response.links.map((link: any) => {
      return {
        label: link.label,
        url: link.url
      }
    }),
    showNav: response.show_nav,
    resume: {
      title: response.resume,
      file: response.file.url,
      showResume: response.show_resume
    },
    projects: {
      title: response.projects_title,
      description: response.projects_description,
      showProjects: response.show_projects
    },
    posts: {
      title: response.posts_title,
      description: response.posts_description,
      readingTime: response.posts_reading_time,
      readMore: response.posts_read_more,
      showPosts: response.show_posts
    },
    errors: {
      notFound: response.not_found,
      internalError: response.internal_error,
      buttonLabel: response.button_label
    },
    footer: response.footer,
    showFooter: response.show_footer
  }

  return data
}
