import { gql } from 'graphql-request'
import { GetStaticPropsContext } from 'next'
import { RichText } from 'prismic-dom'
import readingTime from 'reading-time'

import { formatDate } from '../lib/formatDate'
import { DataResponse } from '../types/data'
import { PostResponse, PostsResponse } from '../types/post'
import { ProjectsResponse, RepositoryResponse } from '../types/project'
import { github } from './github'
import { prismic } from './prismic'

export async function getAllProjects({ locale }: GetStaticPropsContext) {
  if (!locale) throw new Error('locale is not defined')

  const data = await prismic<ProjectsResponse>(
    gql`
      query ($lang: String!) {
        allProjects(lang: $lang) {
          edges {
            node {
              _meta {
                id
              }
              title
              description
              tags
              cover
              repo
            }
          }
        }
      }
    `,
    {
      variables: {
        lang: locale
      }
    }
  )

  const projects = await Promise.all(
    data.allProjects.edges.map(async ({ node }) => {
      const { GITHUB_USERNAME } = process.env

      const gitHubData = await github<RepositoryResponse>(
        gql`
          query ($owner: String!, $name: String!) {
            repository(owner: $owner, name: $name) {
              url
              stargazerCount
            }
          }
        `,
        {
          variables: {
            owner: GITHUB_USERNAME as string,
            name: node.repo
          }
        }
      )

      return {
        id: node._meta.id,
        title: node.title,
        description: node.description,
        tags: node.tags,
        repositoryUrl: gitHubData.repository.url,
        repo: node.repo,
        stars: gitHubData.repository.stargazerCount,
        cover: node.cover.url
      }
    })
  )

  return projects
}

export async function getAllPosts({ locale }: GetStaticPropsContext) {
  if (!locale) throw new Error('locale is not defined')

  const data = await prismic<PostsResponse>(
    gql`
      query ($lang: String!) {
        allPosts(lang: $lang) {
          edges {
            node {
              _meta {
                id
                uid
              }
              title
              description
              cover
              date
              content
            }
          }
        }
      }
    `,
    {
      variables: {
        lang: locale
      }
    }
  )

  const posts = data.allPosts.edges.map(({ node }) => {
    const content = RichText.asHtml(node.content)

    return {
      id: node._meta.id,
      title: node.title,
      description: node.description,
      slug: node._meta.uid,
      cover: node.cover.url,
      date: formatDate(node.date, locale),
      readingTime: Math.floor(readingTime(content).minutes)
    }
  })

  return posts
}

export async function getSinglePost({ params, locale }: GetStaticPropsContext) {
  if (!params?.post) throw new Error('slug is not defined')
  if (!locale) throw new Error('locale is not defined')

  const data = await prismic<PostResponse>(
    gql`
      query ($lang: String!, $uid: String!) {
        post(uid: $uid, lang: $lang) {
          _meta {
            id
            uid
          }
          title
          description
          cover
          date
          content
        }
      }
    `,
    {
      variables: {
        lang: locale,
        uid: params.post as string
      }
    }
  )

  const content = RichText.asHtml(data.post.content)

  const post = {
    id: data.post._meta.id,
    title: data.post.title,
    description: data.post.description,
    slug: data.post._meta.uid,
    cover: data.post.cover.url,
    date: formatDate(data.post.date, locale),
    readingTime: Math.floor(readingTime(content).minutes),
    content
  }

  return post
}

export async function getPaths() {
  const data = await prismic<PostsResponse>(
    gql`
      query {
        allPosts {
          edges {
            node {
              _meta {
                uid
                lang
              }
            }
          }
        }
      }
    `
  )

  const paths = data.allPosts.edges.map(({ node }) => ({
    params: { post: node._meta.uid },
    locale: node._meta.lang
  }))

  return paths
}

export async function getInitialData(locale: string) {
  const response = await prismic<DataResponse>(
    gql`
      query ($lang: String!) {
        allDatas(lang: $lang) {
          edges {
            node {
              title
              short_title
              avatar
              description
              umami_domain
              umami_id
              umami_src
              social_links {
                label
                url {
                  _linkType
                }
              }
              favicon
              links {
                label
                url
              }
              show_nav
              resume
              file {
                _linkType
                __typename
              }
              show_resume
              projects_title
              projects_description
              show_projects
              posts_title
              posts_description
              posts_reading_time
              posts_read_more
              show_posts
              not_found
              internal_error
              button_label
              footer
              show_footer
            }
          }
        }
      }
    `,
    {
      variables: {
        lang: locale
      }
    }
  )

  const data = response.allDatas.edges[0].node
  const faviconSizes = ['32', '48', '72', '96', '144', '192', '256', '384', '512']

  return {
    profile: {
      title: data.title,
      shortTitle: data.short_title,
      avatar: {
        image: data.avatar.url,
        placeholder: data.avatar.placeholder.url
      },
      description: data.description
    },
    umami: {
      domain: data.umami_domain,
      id: data.umami_id,
      src: data.umami_src
    },
    social: data.social_links.map((link: any) => {
      return {
        label: link.label,
        url: link.url.url
      }
    }),
    favicons: faviconSizes.map(size => {
      return {
        size,
        src: data.favicon[size].url
      }
    }),
    nav: data.links.map((link: any) => {
      return {
        label: link.label,
        url: link.url
      }
    }),
    showNav: data.show_nav,
    resume: {
      title: data.resume,
      file: data.file.url,
      showResume: data.show_resume
    },
    projects: {
      title: data.projects_title,
      description: data.projects_description,
      showProjects: data.show_projects
    },
    posts: {
      title: data.posts_title,
      description: data.posts_description,
      readingTime: data.posts_reading_time,
      readMore: data.posts_read_more,
      showPosts: data.show_posts
    },
    errors: {
      notFound: data.not_found,
      internalError: data.internal_error,
      buttonLabel: data.button_label
    },
    footer: data.footer,
    showFooter: data.show_footer
  }
}
