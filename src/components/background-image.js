import React from 'react'

const BackGroundImage = ({ children, className, image }) => (
  <div
    style={{
      backgroundImage: `url(${
        !!image.childImageSharp ? image.childImageSharp.fluid.src : image
      })`,
      backgroundPosition: `center center`,
      backgroundSize: `cover`
    }}
    className={className}
  >
    {children}
  </div>
)

export default BackGroundImage
