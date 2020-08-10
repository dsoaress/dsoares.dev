import styled from 'styled-components'
import Img from 'gatsby-image'

export const ProfileWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  gap: 40px;
  max-width: 900px;
  height: 100%;
  margin: auto;
  padding: 0 20px;
`

export const ProfileImage = styled(Img)`
  border-radius: 3px;
`

export const ProfileTextWrapper = styled.div``
