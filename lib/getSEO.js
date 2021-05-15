const { ApolloClient, InMemoryCache, gql } = require('@apollo/client')

const { API_URL } = process.env

const client = new ApolloClient({
  uri: `${API_URL}/graphql`,
  cache: new InMemoryCache({
    typePolicies: {
      seo: {
        merge: true
      }
    }
  })
})

async function getSEO() {
  const { data: rawSEO } = await client.query({
    query: gql`
      query SEO {
        seo {
          title
          short_title
          tracker_id
          tracker_url
          site_url
          favicon {
            id
          }
          og_image {
            id
          }
          theme_color
          background_color
        }
      }
    `
  })

  const { data: en } = await client.query({
    query: gql`
      query EN {
        seo {
          translations(filter: { languages_code: { _eq: "en" } }) {
            description
          }
        }
      }
    `
  })

  const { data: pt } = await client.query({
    query: gql`
      query PT {
        seo {
          translations(filter: { languages_code: { _eq: "pt" } }) {
            description
          }
        }
      }
    `
  })

  const favicon = `${API_URL}/assets/${rawSEO.seo.favicon.id}`
  const ogImage = `${API_URL}/assets/${rawSEO.seo.og_image.id}`

  const seo = {
    title: rawSEO.seo.title,
    shortTitle: rawSEO.seo.short_title,
    trackerId: rawSEO.seo.tracker_id,
    trackerUrl: rawSEO.seo.tracker_url,
    siteUrl: rawSEO.seo.site_url,
    favicon,
    ogImage,
    themeColor: rawSEO.seo.theme_color,
    backgroundColor: rawSEO.seo.background_color,
    descriptions: {
      en: { description: en.seo.translations[0].description },
      pt: { description: pt.seo.translations[0].description }
    }
  }

  return seo
}

module.exports = getSEO
