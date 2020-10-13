import React from 'react'

import BlockContent from '@components/block-content'
import Social from '@components/social'

const BioShort = ({ text, title }) => (
  <div className="container grid gap-8">
    <h1 className="m-0">{title}</h1>
    {text && <BlockContent blocks={text} />}
    <Social />
  </div>
)

export default BioShort
