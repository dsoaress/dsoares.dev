import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

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
            }
            timeToRead
            fields {
              slug
            }
            excerpt(pruneLength: 400)
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
            frontmatter: { date, title },
            timeToRead,
            fields: { slug },
            excerpt,
          },
        }) => (
          <S.PostItemWrapper>
            <S.PostTitleWrapper>
              <AniLink
                cover
                direction="right"
                bg="var(--background)"
                duration={1}
                to={slug}
              >
                <S.PostTitle>{title}</S.PostTitle>
              </AniLink>
              <S.Meta>
                <S.CalendarIcon />
                {date} <S.ClockIcon />
                {timeToRead} mim de leitura
              </S.Meta>
            </S.PostTitleWrapper>
            <S.PostExcerpt>
              {excerpt}{" "}
              <AniLink
                cover
                direction="right"
                bg="var(--background)"
                duration={1}
                to={slug}
              >
                <S.ArrowIcon />
              </AniLink>
            </S.PostExcerpt>
          </S.PostItemWrapper>
        )
      )}
    </S.BlogWrapper>
  )
}

export default BlogList
