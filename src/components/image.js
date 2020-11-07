import React from 'react'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

const baseStyle = 'overflow-hidden rounded-xl shadow-md'

export const Image = ({ alt, className, src }) =>
  !!src?.childImageSharp ? (
    <Img
      fluid={src.childImageSharp.fluid}
      alt={alt}
      className={`${baseStyle} ${className}`}
    />
  ) : (
    <div className={`${baseStyle} ${className}`}>
      <img
        src={src}
        alt={alt}
        className="object-cover object-center w-full h-full "
      />
    </div>
  )

export const Background = ({ className, children, src }) =>
  !!src?.childImageSharp ? (
    <BackgroundImage
      fluid={src.childImageSharp.fluid}
      className={`${baseStyle} ${className}`}
    >
      {children}
    </BackgroundImage>
  ) : (
    <div
      className={`${baseStyle} ${className} bg-cover bg-center `}
      style={{
        backgroundImage: `url(${src})`
      }}
    >
      {children}
    </div>
  )
