import Prismic from '@prismicio/client'
import fs from 'fs'
import prettier from 'prettier'

import { i18n } from '../../locales.config'
import { theme } from '../../tailwind.config'
import { getPrismicClient } from './prismic'

export async function initialdata() {
  const prismic = getPrismicClient()

  await Promise.all(
    i18n.locales.map(async locale => {
      const startUrl = locale === i18n.defaultLocale ? '' : locale
      const manifestDir = locale === i18n.defaultLocale ? './public' : `./public/${locale}`

      const dataResponse = await prismic.query([Prismic.predicates.at('document.type', 'data')], {
        lang: locale
      })

      const response = dataResponse.results[0].data

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
        favicons: {
          '32': response.favicon['32'].url,
          '48': response.favicon['48'].url,
          '72': response.favicon['72'].url,
          '96': response.favicon['96'].url,
          '144': response.favicon['144'].url,
          '192': response.favicon['192'].url,
          '256': response.favicon['256'].url,
          '384': response.favicon['384'].url,
          '512': response.favicon.url
        },
        nav: response.links.map((link: any) => {
          return {
            label: link.label,
            url: link.url
          }
        }),
        resume: {
          title: response.resume,
          file: response.file.url
        },
        projects: {
          title: response.projects_title,
          description: response.projects_description
        },
        posts: {
          title: response.posts_title,
          description: response.posts_description,
          readingTime: response.posts_reading_time,
          readMore: response.posts_read_more
        },
        errors: {
          notFound: response.not_found,
          internalError: response.internal_error,
          buttonLabel: response.button_label
        },
        footer: response.footer
      }

      const formattedData = prettier.format(JSON.stringify(data), {
        parser: 'json'
      })

      if (!fs.existsSync('./data')) {
        fs.mkdirSync('./data')
      }

      fs.writeFileSync(`./data/${locale}.json`, formattedData)

      const manifestData = `
        {
          "name": "${data.profile.title}",
          "short_name": "${data.profile.shortTitle}",
          "start_url": "/${startUrl}",
          "background_color": "${theme.extend.colors.neutral[900]}",
          "theme_color": "${theme.extend.colors.neutral[900]}",
          "display": "fullscreen",
          "icons": [
            {
              "purpose": "any maskable",
              "src": "${data.favicons['48']}",
              "sizes": "48x48",
              "type": "image/png"
            },
            {
              "purpose": "any maskable",
              "src": "${data.favicons['72']}",
              "sizes": "72x72",
              "type": "image/png"
            },
            {
              "purpose": "any maskable",
              "src": "${data.favicons['96']}",
              "sizes": "96x96",
              "type": "image/png"
            },
            {
              "purpose": "any maskable",
              "src": "${data.favicons['144']}",
              "sizes": "144x144",
              "type": "image/png"
            },
            {
              "purpose": "any maskable",
              "src": "${data.favicons['192']}",
              "sizes": "192x192",
              "type": "image/png"
            },
            {
              "purpose": "any maskable",
              "src": "${data.favicons['256']}",
              "sizes": "256x256",
              "type": "image/png"
            },
            {
              "purpose": "any maskable",
              "src": "${data.favicons['384']}",
              "sizes": "384x384",
              "type": "image/png"
            },
            {
              "purpose": "any maskable",
              "src": "${data.favicons['512']}",
              "sizes": "512x512",
              "type": "image/png"
            }
          ]
        }
      `

      if (!fs.existsSync(manifestDir)) {
        fs.mkdirSync(manifestDir, { recursive: true })
      }

      const formattedManifest = prettier.format(manifestData, {
        parser: 'json'
      })

      fs.writeFileSync(`${manifestDir}/manifest.json`, formattedManifest)
    })
  )
}
