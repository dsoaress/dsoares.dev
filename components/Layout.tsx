import styled from 'styled-components'
import media from 'styled-media-query'

const Layout = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;

  ${media.greaterThan('medium')`
    flex-direction: row;
  `}
`

export default Layout
