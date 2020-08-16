import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image'

export const Wrapper = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 0 30px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;

  ${media.lessThan('small')`
    grid-template-columns: 1fr;
    gap: 1.8rem;
  `}
`

export const TextWrapper = styled.div``

export const Image = styled(Img)`
  border-radius: 3px;
`
