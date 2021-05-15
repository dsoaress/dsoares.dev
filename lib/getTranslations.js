const { ApolloClient, InMemoryCache, gql } = require('@apollo/client')

const { API_URL } = process.env

const client = new ApolloClient({
  uri: `${API_URL}/graphql`,
  cache: new InMemoryCache({
    typePolicies: {
      translations: {
        merge: true
      }
    }
  })
})

async function getTranslations() {
  const { data: en } = await client.query({
    query: gql`
      query En {
        translations {
          en: translations(filter: { languages_code: { _eq: "en" } }) {
            language_name
            nav
            blog_title
            blog_subtitle
            blog_description
            blog_button
            blog_date
            blog_reading_time
            blog_minute
            blog_preposition
            newsletter_title
            newsletter_subtitle
            newsletter_name
            newsletter_email
            newsletter_button
            newsletter_success
            newsletter_error
            error_404_title
            error_404_message
            error_500_title
            error_500_message
          }
        }
      }
    `
  })

  const { data: pt } = await client.query({
    query: gql`
      query Pt {
        translations {
          pt: translations(filter: { languages_code: { _eq: "pt" } }) {
            language_name
            nav
            blog_title
            blog_subtitle
            blog_description
            blog_button
            blog_date
            blog_reading_time
            blog_minute
            blog_preposition
            newsletter_title
            newsletter_subtitle
            newsletter_name
            newsletter_email
            newsletter_button
            newsletter_success
            newsletter_error
            error_404_title
            error_404_message
            error_500_title
            error_500_message
          }
        }
      }
    `
  })

  const translations = {
    en: en.translations.en[0],
    pt: pt.translations.pt[0]
  }

  return translations
}

module.exports = getTranslations
