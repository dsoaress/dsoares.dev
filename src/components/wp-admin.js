import React from 'react'

const WPAdmin = ({ video }) => (
  <video
    autoPlay
    playsInline
    muted
    loop
    className="fixed inset-0 min-w-full min-h-screen bg-black"
  >
    <source src={video} type="video/mp4" />
  </video>
)

export default WPAdmin
