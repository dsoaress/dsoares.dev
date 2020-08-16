import React from 'react'
import styled from 'styled-components'

import SEO from '../components/SEO'
import video from '../../content/assets/wp-admin.mp4'

const WPAdminWrapper = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: calc(var(--vh, 1vh) * 100);
  background: black;
`

const WPAdminPage = () => (
  <WPAdminWrapper autoPlay playsInline muted loop>
    <SEO title="Hey you 😘" />
    <source src={video} type="video/mp4" />
  </WPAdminWrapper>
)

export default WPAdminPage
