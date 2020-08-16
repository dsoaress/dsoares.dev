import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Nav from '../Nav'
import * as S from './styled'

const Header = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { key: { eq: "settings" } }) {
          frontmatter {
            title
          }
        }
      }
    `
  )
  const title = markdownRemark.frontmatter.title
    .split(/(\s+)/)
    .filter(e => e.trim().length > 0)

  return (
    <S.Wrapper>
      <S.Logo>
        {title[0]}
        <span>{title[1]}</span>
      </S.Logo>
      <Nav />
    </S.Wrapper>
  )
}

export default Header
