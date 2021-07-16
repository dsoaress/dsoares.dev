import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.nav`
  position: absolute;
  left: 0;
  right: 0;
  padding: 48px 64px 120px;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.background} 0%,
    rgba(0, 0, 0, 0) 90%
  );
  font-size: ${({ theme }) => theme.fontSizes.sm} !important;
  z-index: 10;
`
export const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;

  ${media.greaterThan('medium')`
    justify-content: flex-end;
  `}
`

export const NavLinkItem = styled.li`
  margin-right: 24px;
`

export const LanguageSelector = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`

export const LanguageItem = styled.li`
  margin-right: 8px;

  &:last-child {
    margin: 0;
  }
`
