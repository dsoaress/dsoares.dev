import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import * as S from "./styled"

const BlogList = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        limit: 50
        sort: { order: DESC, fields: frontmatter___date }
        filter: { frontmatter: { templateKey: { eq: "blogPost" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              title
              description
              image {
                childImageSharp {
                  fluid(maxWidth: 600, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            timeToRead
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const blogItens = allMarkdownRemark.edges

  return (
    <S.BlogWrapper>
      <h1>Blog</h1>

      {blogItens.map(({ node: blogItem }) => (
        <S.PostItemWrapper key={blogItem.fields.slug}>
          {blogItem.frontmatter.image && (
            <S.PostItemImage
              fluid={blogItem.frontmatter.image.childImageSharp.fluid}
            />
          )}
          <S.PostTitleWrapper>
            <S.Meta>
              <S.CalendarIcon />
              {blogItem.frontmatter.date} <S.ClockIcon />
              {blogItem.timeToRead} min de leitura
            </S.Meta>
            <Link to={blogItem.fields.slug}>
              <S.PostTitle>{blogItem.frontmatter.title}</S.PostTitle>
            </Link>

            <S.PostDescription>
              {blogItem.frontmatter.description}{" "}
              <Link to={blogItem.fields.slug}>
                <S.ArrowIcon />
              </Link>
            </S.PostDescription>
          </S.PostTitleWrapper>
        </S.PostItemWrapper>
      ))}
    </S.BlogWrapper>
  )
}

export default BlogList
