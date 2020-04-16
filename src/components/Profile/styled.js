import styled from "styled-components"
import media from "styled-media-query"

import Img from "gatsby-image"

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const ProfileImage = styled(Img)`
  width: 30%;
  height: 55vh;
  min-height: 310px;
  border-radius: 3px;
  margin-right: 5%;

  ${media.lessThan("780px")`
  width: 40%;
  `}

  ${media.lessThan("600px")`
    display: none;
  `}
`

export const ProfileDesc = styled.div`
  width: 65%;
  padding-bottom: 30px;
  font-size: 18px;

  ${media.lessThan("780px")`
  width: 55%;
  `}

  ${media.lessThan("600px")`
    width: 100%;
    font-size: 16px;
  `}
`

export const ProfileDescBig = styled.span`
  font-size: 120px;
  display: block;

  ${media.between("601px", "large")`
    font-size: 80px;
  `}

  ${media.lessThan("600px")`
    font-size: 60px;
  `}
`
