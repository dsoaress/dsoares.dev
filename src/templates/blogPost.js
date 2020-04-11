import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import * as S from "../components/Post/styled"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <S.PostWrapper>
        <SEO title={post.frontmatter.title} />
        <S.Meta>
          <S.CalendarIcon />
          {post.frontmatter.date}
          <S.ClockIcon />
          {post.timeToRead} min de leitura
        </S.Meta>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
        <S.MainContent dangerouslySetInnerHTML={{ __html: post.html }} />
      </S.PostWrapper>
    </Layout>
  )
}

export const query = graphql`
  query Post($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      }
      id
      html
      timeToRead
    }
  }
`

export default BlogPost
