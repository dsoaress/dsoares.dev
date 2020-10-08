const {
  api: { projectId, dataset }
} = requireConfig('../back/sanity.json')

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
              showCaptions: true,
              quality: 80,
              withWebp: true
            }
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: f => `static/${f.hash}/${f.name}`
            }
          }
        ]
      }
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId,
        dataset,
        token: process.env.SANITY_TOKEN,
        watchMode: false,
        overlayDrafts: false
      }
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Rubik Mono One`
            },
            {
              family: `Rubik`,
              variants: [`400`, `400i`, `700`, `700i`]
            }
          ]
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Daniel Soares`,
        short_name: `Daniel Soares`,
        start_url: `/`,
        background_color: `#0e141b`,
        theme_color: `#ff0a78`,
        display: `fullscreen`,
        icon: `content/assets/icon.png`
      }
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-P595KV5`,
        includeInDevelopment: false,
        defaultDataLayer: { platform: `gatsby` }
      }
    },
    `gatsby-plugin-offline`
  ]
}

function requireConfig(path) {
  try {
    return require(path)
  } catch (e) {
    console.error(
      'Failed to require sanity.json. Fill in projectId and dataset name manually in gatsby-config.js'
    )
    return {
      api: {
        projectId: process.env.SANITY_PROJECT_ID || '',
        dataset: process.env.SANITY_DATASET || ''
      }
    }
  }
}
