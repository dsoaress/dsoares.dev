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
    <figure className="my-4">
      <Img fluid={fluidProps} alt={node.alt} className="rounded-xl shadow-xl" />
      {node.caption && (
        <figcaption className="text-sm italic center mt-3">
          {node.caption}
        </figcaption>
      )}
    </figure>
  )
}
