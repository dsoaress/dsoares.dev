import Prismic from '@prismicio/client'
import fs from 'fs'
import prettier from 'prettier'

import { i18n } from '../../locales.config'
import { theme } from '../../tailwind.config'
import { getPrismicClient } from './prismic'

export async function preBuild() {
  const prismic = getPrismicClient()

  const lang = {
    en: 'en-us',
    pt: 'pt-br'
  }

  if (!fs.existsSync('./content/i18n')) {
    fs.mkdirSync('./content/i18n', { recursive: true })
  }

  const profileResponse = await prismic.query([Prismic.predicates.at('document.type', 'profile')], {
    lang: '*'
  })

  const { data } = profileResponse.results[0]

  const profileData = {
    title: data.title,
    shortTitle: data.short_title,
    avatar: data.avatar.url,
    umami: {
      domain: data.domain,
      id: data.id,
      src: data.src
    },
    social: data.links.map((link: any) => {
      return {
        label: link.label,
        url: link.url.url
      }
    })
  }

  const formattedProfileData = prettier.format(JSON.stringify(profileData), {
    parser: 'json'
  })

  fs.writeFileSync('./content/profile.json', formattedProfileData)

  const favicons = {
    '32': data.favicon['32'].url,
    '48': data.favicon['48'].url,
    '72': data.favicon['72'].url,
    '96': data.favicon['96'].url,
    '144': data.favicon['144'].url,
    '192': data.favicon['192'].url,
    '256': data.favicon['256'].url,
    '384': data.favicon['384'].url,
    '512': data.favicon.url
  }

  const formattedFavicons = prettier.format(JSON.stringify(favicons), {
    parser: 'json'
  })

  fs.writeFileSync('./content/favicons.json', formattedFavicons)

  await Promise.all(
    i18n.locales.map(async locale => {
      const startUrl = locale === i18n.defaultLocale ? '' : locale
      const manifestDir = locale === i18n.defaultLocale ? './public' : `./public/${locale}`

      const i18nResponse = await prismic.query([Prismic.predicates.at('document.type', 'i18n')], {
        lang: (lang as any)[locale]
      })

      const i18nData = {
        description: i18nResponse.results[0].data.description,
        nav: i18nResponse.results[0].data.links.map((link: any) => {
          return {
            label: link.label,
            url: link.url
          }
        }),
        resume: i18nResponse.results[0].data.resume,
        projects: {
          title: i18nResponse.results[0].data.projects_title,
          description: i18nResponse.results[0].data.projects_description
        },
        posts: {
          title: i18nResponse.results[0].data.posts_title,
          description: i18nResponse.results[0].data.posts_description,
          readingTime: i18nResponse.results[0].data.posts_reading_time,
          readMore: i18nResponse.results[0].data.posts_read_more
        },
        errors: {
          notFound: i18nResponse.results[0].data.not_found,
          internalError: i18nResponse.results[0].data.internal_error,
          buttonLabel: i18nResponse.results[0].data.button_label
        },
        footer: i18nResponse.results[0].data.footer
      }

      const formattedI18n = prettier.format(JSON.stringify(i18nData), {
        parser: 'json'
      })

      fs.writeFileSync(`./content/i18n/${locale}.json`, formattedI18n)

      const manifestData = `
        {
          "name": "${profileData.title}",
          "short_name": "${profileData.shortTitle}",
          "start_url": "/${startUrl}",
          "background_color": "${theme.extend.colors.neutral[900]}",
          "theme_color": "${theme.extend.colors.neutral[900]}",
          "display": "fullscreen",
          "icons": [
            {
              "purpose": "any maskable",
              "src": "${favicons['48']}",
              "sizes": "48x48",
              "type": "image/png"
            },
            {
              "purpose": "any maskable",
              "src": "${favicons['72']}",
              "sizes": "72x72",
              "type": "image/png"
            },
            {
              "purpose": "any maskable",
              "src": "${favicons['96']}",
              "sizes": "96x96",
              "type": "image/png"
            },
            {
              "purpose": "any maskable",
              "src": "${favicons['144']}",
              "sizes": "144x144",
              "type": "image/png"
            },
            {
              "purpose": "any maskable",
              "src": "${favicons['192']}",
              "sizes": "192x192",
              "type": "image/png"
            },
            {
              "purpose": "any maskable",
              "src": "${favicons['256']}",
              "sizes": "256x256",
              "type": "image/png"
            },
            {
              "purpose": "any maskable",
              "src": "${favicons['384']}",
              "sizes": "384x384",
              "type": "image/png"
            },
            {
              "purpose": "any maskable",
              "src": "${favicons['512']}",
              "sizes": "512x512",
              "type": "image/png"
            }
          ]
        }
      `

      if (!fs.existsSync(manifestDir)) {
        fs.mkdirSync(manifestDir)
      }

      const formattedManifest = prettier.format(manifestData, {
        parser: 'json'
      })

      fs.writeFileSync(`${manifestDir}/manifest.json`, formattedManifest)
    })
  )
}
