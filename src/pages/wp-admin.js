import React from 'react'
import SEO from '@seo'
import video from '@assets/wp-admin.mp4'

const WPAdminPage = () => (
  <video
    autoPlay
    playsInline
    muted
    loop
    className="fixed inset-0 min-w-full min-h-screen bg-black"
  >
    <SEO title="Hey you 😘" />
    <source src={video} type="video/mp4" />
  </video>
)

export default WPAdminPage
