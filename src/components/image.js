import React from 'react'
import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import styled from 'styled-components'
import { border, shadow, space, typography } from 'styled-system'
import clientConfig from '../../client-config'

const Figure = styled('figure')(space)
const Image = styled(Img)(border, shadow)
const FigCaption = styled('figcaption')(space, typography)

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
    <Figure my={5}>
      <Image
        fluid={fluidProps}
        alt={node.alt}
        borderRadius={2}
        boxShadow="0 0 30px #020204"
      />
      {node.caption && (
        <FigCaption fontSize={1} fontStyle="italic" textAlign="center" mt={3}>
          {node.caption}
        </FigCaption>
      )}
    </Figure>
  )
}
