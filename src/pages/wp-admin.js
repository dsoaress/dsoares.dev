import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import SEO from '@seo'

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
    <video
      autoPlay
      playsInline
      muted
      loop
      style={{
        position: 'fixed',
        right: 0,
        bottom: 0,
        minWidth: '100%',
        minHeight: '100vh',
        background: 'black'
      }}
    >
      <SEO title={sanitySiteSettings.easterEgg.title} />
      <source
        src={sanitySiteSettings.easterEgg.video.asset.url}
        type="video/mp4"
      />
    </video>
  )
}

export default WPAdminPage
