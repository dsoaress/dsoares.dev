import styled from 'styled-components'
import Img from 'gatsby-image'

export const AboutWrapper = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 0 20px;
`

export const AboutTextWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
`

export const AboutImage = styled(Img)`
  border-radius: 3px;
`
