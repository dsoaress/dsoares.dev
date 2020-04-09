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
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.Meta>
          <S.MetaItem>
            <S.CalendarIcon />
            {post.frontmatter.date}
          </S.MetaItem>
          <S.MetaItem>
            <S.ClockIcon />
            {post.timeToRead} min de leitura
          </S.MetaItem>
        </S.Meta>
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
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      }
      id
      html
      timeToRead
    }
  }
`

export default BlogPost
