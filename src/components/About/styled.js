import styled from 'styled-components'
import media from 'styled-media-query'

import Img from 'gatsby-image'

export const AboutWrapper = styled.div`
  display: block;
`

export const AboutFlex = styled.div`
  display: flex;

  ${media.lessThan('600px')`
    flex-direction: column;
  `}
`

export const AboutDesc = styled.div`
  width: 65%;
  padding-bottom: 30px;

  ${media.lessThan('780px')`
  width: 55%;
  `}

  ${media.lessThan('600px')`
    width: 100%;
  `}
`

export const AboutImage = styled(Img)`
  width: 30%;
  height: 450px;
  border-radius: 3px;
  margin-left: 5%;

  ${media.lessThan('780px')`
  width: 40%;
  `}

  ${media.lessThan('600px')`
  width: 100%;
  margin-left: 0;
  `}
`
