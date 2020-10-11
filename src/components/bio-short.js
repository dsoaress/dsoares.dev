import React from 'react'
import Img from 'gatsby-image'

import BlockContent from './block-content'
import Social from './social'

const BioShort = ({ image, text, title }) => (
  <div>
    <Img fluid={image} />
    <div>
      <h1>{title}</h1>
      {text && <BlockContent blocks={text} />}
      <Social />
    </div>
  </div>
)

export default BioShort
