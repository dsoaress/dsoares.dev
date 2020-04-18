import React from "react"
import styled from "styled-components"

import gif from "../../static/images/wp-admin.gif"

export const WPAdminWrapper = styled.section`
  background: url(${gif}) center center no-repeat;
  background-size: cover;
  width: 100%;
  min-height: calc(var(--vh, 1vh) * 100);
`

const WPAdminPage = () => <WPAdminWrapper />

export default WPAdminPage
