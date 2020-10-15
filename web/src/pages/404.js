import { useStaticQuery, graphql } from 'gatsby'
import Layout from '@layout'
import SEO from '@seo'

const NotFoundPage = () => {
  const { sanitySiteSettings } = useStaticQuery(
    graphql`
      query {
        sanitySiteSettings {
          notFoundPage {
            message
            title
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title={sanitySiteSettings.notFoundPage.title} />
      <div className="container text-center my-56">
        <h1>{sanitySiteSettings.notFoundPage.title}</h1>
        <p>{sanitySiteSettings.notFoundPage.message}</p>
      </div>
    </Layout>
  )
}

export default NotFoundPage
