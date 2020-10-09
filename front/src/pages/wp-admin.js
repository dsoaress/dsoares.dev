import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import SEO from '../components/SEO'

const Wrapper = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: calc(var(--vh, 1vh) * 100);
  background: black;
`

const WPAdminPage = () => {
  const { sanitySiteSettings } = useStaticQuery(
    graphql`
      query {
        sanitySiteSettings {
          easterEgg {
            title
            video {
              asset {
                url
              }
            }
          }
        }
      }
    `
  )

  return (
    <Wrapper autoPlay playsInline muted loop>
      <SEO title={sanitySiteSettings.easterEgg.title} />
      <source
        src={sanitySiteSettings.easterEgg.video.asset.url}
        type="video/mp4"
      />
    </Wrapper>
  )
}

export default WPAdminPage
