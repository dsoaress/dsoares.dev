import styled from 'styled-components'
import media from 'styled-media-query'

export const Heading = styled.h1`
  font-size: 3rem;
  line-height: 1;
  font-weight: 900;
  margin: 0;

  ${media.lessThan('small')`
    font-size: 2.4rem;
  `}
`
