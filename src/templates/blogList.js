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
  const posts = props.data.allMarkdownRemark.edges
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
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            description={node.frontmatter.description}
            image={node.frontmatter.image.childImageSharp.fluid}
            timeToRead={node.timeToRead}
            slug={node.fields.slug}
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
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { key: { eq: "blogPost" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            title
            image {
              childImageSharp {
                fluid(maxWidth: 300, quality: 80) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          timeToRead
        }
      }
    }
  }
`
