import React from 'react'

import { H1 } from '@components/typography'
import BlockContent from '@components/block-content'
import Social from '@components/social'

const BioShort = ({ text, title }) => (
  <div>
    <H1>{title}</H1>
    {text && <BlockContent blocks={text} />}
    <Social />
  </div>
)

export default BioShort
