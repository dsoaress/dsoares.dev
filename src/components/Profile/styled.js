import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  gap: 40px;
  max-width: 900px;
  height: 100%;
  margin: auto;
  padding: 0 30px;

  ${media.lessThan('small')`
    grid-template-columns: 1fr;
  `}
`

export const Image = styled(Img)`
  border-radius: 3px;

  ${media.lessThan('small')`
    display: none;
  `}
`

export const TextWrapper = styled.div``
