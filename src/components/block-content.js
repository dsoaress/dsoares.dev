import React from 'react'
import BaseBlockContent from '@sanity/block-content-to-react'
import Image from '@components/image'

import { H1, H2, H3, H4, H5, H6 } from '@components/typography'

const serializers = {
  types: {
    imageBlock: Image,
    block(props) {
      switch (props.node.style) {
        case 'h1':
          return <H1>{props.children}</H1>

        case 'h2':
          return <H2>{props.children}</H2>

        case 'h3':
          return <H3>{props.children}</H3>

        case 'h4':
          return <H4>{props.children}</H4>

        case 'h5':
          return <H5>{props.children}</H5>

        case 'h6':
          return <H6>{props.children}</H6>

        case 'blockquote':
          return <blockquote>{props.children}</blockquote>

        default:
          return <p>{props.children}</p>
      }
    }
  }
}

const BlockContent = ({ blocks }) => (
  <BaseBlockContent blocks={blocks} serializers={serializers} />
)

export default BlockContent
