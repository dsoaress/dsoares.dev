import React from 'react'
import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import clientConfig from '../../client-config'

export default ({ node }) => {
  if (!node.asset) {
    return null
  }

  const fluidProps = getFluidGatsbyImage(
    node.asset._ref,
    { maxWidth: 1024 },
    clientConfig.sanity
  )

  return (
    <figure className="my-8 md:-mx-16 lg:-mx-40">
      <Img fluid={fluidProps} alt={node.alt} className="rounded-xl shadow-md" />
      {node.caption && (
        <figcaption className="text-sm italic text-center mt-3 md:mx-16 lg:mx-40">
          {node.caption}
        </figcaption>
      )}
    </figure>
  )
}
