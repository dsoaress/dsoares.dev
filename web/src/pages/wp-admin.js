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
      className="fixed inset-0 min-w-full min-h-screen bg-black"
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
