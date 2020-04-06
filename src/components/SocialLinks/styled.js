import styled from "styled-components"
import media from "styled-media-query"

export const SocialLinksList = styled.ul`
  list-style: none;
  margin-top: 40px;

  ${media.lessThan("medium")`
    margin-top: 20px;
  `}
`

export const SocialLinksItem = styled.li`
  display: inline-block;
  margin-right: 40px;
`

export const SocialLinksLink = styled.a`
  color: #dadada;
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: #bc2d57;
  }
`

export const IconWrapper = styled.div`
  width: 30px;
  height: 30px;

  ${media.lessThan("medium")`
    width: 25px;
    height: 25px;
  `}
`
