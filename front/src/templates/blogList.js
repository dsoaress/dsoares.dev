import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/'
import SEO from '../components/SEO'
import PostItem from '../components/PostItem'
import Pagination from '../components/Pagination'

const Wrapper = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 0 30px;
`

const BlogList = props => {
  const posts = props.data.allSanityPost.edges
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/blog' : `/blog/${currentPage - 1}`
  const nextPage = `/blog/${currentPage + 1}`

  return (
    <Layout>
      <SEO title="Blog" />
      <Wrapper>
        <h1>Blog</h1>
        {posts.map(({ node }, i) => (
          <PostItem
            key={i}
            title={node.title}
            date={node.date}
            description={node.description}
            image={node.mainImage.asset.fluid}
            slug={node.slug.current}
          />
        ))}

        <Pagination
          currentPage={currentPage}
          numPages={numPages}
          isFirst={isFirst}
          isLast={isLast}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </Wrapper>
    </Layout>
  )
}

export default BlogList

export const PostListQuery = graphql`
  query PostListQuery($skip: Int!, $limit: Int!) {
    allSanityPost(
      sort: { fields: date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          slug {
            current
          }
          date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
          description
          title
          mainImage {
            asset {
              fluid(maxWidth: 300) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`
