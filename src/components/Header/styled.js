import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { Sun } from "@styled-icons/evaicons-solid/Sun"

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 140px;
  padding: 0 3%;
  border-top: 10px solid #bc2d57;

  ${media.lessThan("600px")`
    height: 100px;
    padding: 0 20px;
  `}
`

export const Logo = styled.div`
  font-family: "Rubik Mono One", sans-serif;
  font-size: 20px;
`

export const LastName = styled.span`
  color: #bc2d57;
`

export const NavLinks = styled.nav``

export const NavLinksList = styled.ul``

export const NavLinksItem = styled.li`
  display: inline-block;
  margin-left: 30px;
  .active {
    color: #bc2d57;
    text-decoration-line: line-through;
  }

  ${media.lessThan("600px")`
    display: none;
  `}
`

export const NavLinksLink = styled(AniLink)`
  color: #dadada;
  text-decoration: none;
  border: none;
  &:hover {
    color: #bc2d57;
    text-decoration-line: line-through;
  }
`

export const SunIcon = styled(Sun)`
  width: 25px;
  height: 25px;
  color: yellow;
  transition: color 0.5s;
  &:hover {
    color: #dadada;
  }
`
