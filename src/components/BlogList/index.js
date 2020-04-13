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
      <S.Title>Blog</S.Title>

      {blogItens.map(
        ({
          node: {
            id,
            frontmatter: {
              date,
              title,
              description,
              image: {
                childImageSharp: { fluid },
              },
            },
            timeToRead,
            fields: { slug },
          },
        }) => (
          <S.PostItemWrapper>
            <S.PostItemImage fluid={fluid} />
            <S.PostTitleWrapper>
              <S.Meta>
                <S.CalendarIcon />
                {date} <S.ClockIcon />
                {timeToRead} min de leitura
              </S.Meta>
              <Link to={slug}>
                <S.PostTitle>{title}</S.PostTitle>
              </Link>

              <S.PostDescription>
                {description}{" "}
                <Link to={slug}>
                  <S.ArrowIcon />
                </Link>
              </S.PostDescription>
            </S.PostTitleWrapper>
          </S.PostItemWrapper>
        )
      )}
    </S.BlogWrapper>
  )
}

export default BlogList
