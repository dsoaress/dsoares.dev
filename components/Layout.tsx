import styled from 'styled-components'
import media from 'styled-media-query'

export const Layout = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;

  ${media.greaterThan('medium')`
    flex-direction: row;
  `}
`
