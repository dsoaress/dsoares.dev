import styled from 'styled-components'
import media from 'styled-media-query'

import Img from 'gatsby-image'

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const ProfileImage = styled(Img)`
  width: 30%;
  height: 45vh;
  min-height: 310px;
  border-radius: 3px;
  margin-right: 5%;

  ${media.lessThan('780px')`
  width: 40%;
  `}

  ${media.lessThan('600px')`
    display: none;
  `}
`

export const ProfileDesc = styled.div`
  width: 65%;

  ${media.lessThan('780px')`
  width: 55%;
  `}

  ${media.lessThan('600px')`
    width: 100%;
  `}
`
