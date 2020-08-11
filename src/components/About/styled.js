import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image'

export const AboutWrapper = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 0 30px;
`

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;

  ${media.lessThan('small')`
    grid-template-columns: 1fr;
    gap: 1.8rem;
  `}
`

export const AboutTextWrapper = styled.div``

export const AboutImage = styled(Img)`
  border-radius: 3px;
`
