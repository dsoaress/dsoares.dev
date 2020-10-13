import React from 'react'
import Img from 'gatsby-image'

import BlockContent from '@components/block-content'
import Social from '@components/social'

const About = ({ data }) => (
  <div className="container grid gap-8 grid-cols-1 sm:grid-cols-2">
    <div className="grid gap-8">
      <h1 className="m-0">{data.title}</h1>
      {data._rawText && <BlockContent blocks={data._rawText} />}
      <Social />
    </div>
    <Img fluid={data.image?.asset.fluid} className="rounded-xl shadow-xl" />
  </div>
)

export default About
