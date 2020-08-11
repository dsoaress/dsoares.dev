import styled from 'styled-components'
import { Link } from 'gatsby'

export const NavWrapper = styled.nav``

export const NavList = styled.ul`
  display: inline-flex;
  gap: 40px;
  list-style: none;
  margin: 0;
`

export const NavItem = styled.li`
  margin: 0;
`

export const NavLink = styled(Link)`
  color: var(--default);
  text-decoration: none;
  border: none;

  &:hover {
    color: var(--highLight);
    text-decoration-line: line-through;
  }

  &.active {
    color: var(--highLight);
    text-decoration-line: line-through;
  }
`
