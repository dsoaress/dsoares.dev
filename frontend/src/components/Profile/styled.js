import styled from 'styled-components'
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

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`

export const Image = styled(Img)`
  border-radius: 3px;

  @media (max-width: 450px) {
    display: none;
  }
`

export const TextWrapper = styled.div``
