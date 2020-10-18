import React from 'react'
import Img from 'gatsby-image'

const Image = ({ alt, className, image }) =>
  !!image?.childImageSharp ? (
    <Img fluid={image.childImageSharp.fluid} alt={alt} className={className} />
  ) : (
    <div className={className} style={{ overflow: 'hidden' }}>
      <img
        src={image}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center center'
        }}
        alt={alt}
      />
    </div>
  )

export default Image
