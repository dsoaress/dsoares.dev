import { graphql } from 'gatsby'
import Layout from '@layout'
import SEO from '@seo'
import Post from '@components/post'

const BlogPost = ({ data }) => {
  const post = data.post
  console.log(post._rawBody)
  return (
    <Layout>
      <SEO title={post.title} description={post.description} />
      <Post post={post} />
    </Layout>
  )
}

export const query = graphql`
  query Post($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      title
      date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      description
      mainImage {
        asset {
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid
          }
        }
      }
      _rawBody
    }
  }
`

export default BlogPost
