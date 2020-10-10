require(`dotenv`).config()
const clientConfig = require(`./client-config`)
const isProd = process.env.NODE_ENV === `production`

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd
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
        icon: `src/assets/icon.png`
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
