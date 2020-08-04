import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'gatsby'

import { Sun } from '@styled-icons/evaicons-solid/Sun'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 140px;
  padding: 0 3%;
  margin-bottom: 40px;
  border-top: 10px solid var(--highLight);

  ${media.lessThan('600px')`
    flex-direction: column;
    justify-content: space-around;
    height: 140px;
    padding: 20px 20px;
    border-bottom: 1px solid var(--backgroundMedium);
  `}
`

export const Logo = styled.div`
  font-family: 'Rubik Mono One', sans-serif;
  font-size: 20px;
`

export const LastName = styled.span`
  color: var(--highLight);
`

export const NavLinks = styled.nav``

export const NavLinksList = styled.ul`
  margin: 0;
`

export const NavLinksItem = styled.li`
  display: inline-block;
  margin: 0 0 0 30px;
  .active {
    color: var(--highLight);
    text-decoration-line: line-through;
  }

  ${media.lessThan('600px')`
    margin: 0 10px;
  `}
`

export const NavLinksLink = styled(Link)`
  color: var(--default);
  text-decoration: none;
  border: none;
  &:hover {
    color: var(--highLight);
    text-decoration-line: line-through;
  }
`

export const SunIcon = styled(Sun)`
  width: 25px;
  height: 25px;
  color: var(--sun);
  cursor: pointer;
`
