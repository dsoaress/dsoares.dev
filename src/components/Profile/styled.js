import styled from "styled-components"
import media from "styled-media-query"

import Profife from "../../images/profile.jpg"

export const ProfileWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 0 3%;

  ${media.lessThan("600px")`
    padding: 0 20px;
  `}
`

export const ProfileImg = styled.div`
  width: 35%;
  min-height: 50vh;
  border-radius: 3px;
  margin-right: 5%;
  background: url(${Profife}) center;
  background-size: cover;

  ${media.lessThan("600px")`
    display: none;
  `}
`

export const ProfileDesc = styled.div`
  width: 60%;

  ${media.lessThan("600px")`
    width: 100%;
  `}
`

export const ProfileDescP = styled.p`
  font-size: 18px;

  ${media.lessThan("medium")`
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
