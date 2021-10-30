import { gql } from '@/lib/gql'
import { formatLocale } from '@/lib/localeUtils'
import { prismic } from '@/services/prismic'
import { DataResponse } from '@/types/data'

export async function getInitialData(locale: string) {
  const formattedLocale = formatLocale(locale)

  const data = await prismic<DataResponse>(
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
                  ... on _ExternalLink {
                    url
                  }
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
                ... on _FileLink {
                  url
                }
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
        lang: formattedLocale
      }
    }
  )

  const response = data.allDatas.edges[0].node
  const faviconSizes = ['32', '48', '72', '96', '144', '192', '256', '384', '512']

  return {
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
}
