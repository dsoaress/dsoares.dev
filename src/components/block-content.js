import React from 'react'
import BaseBlockContent from '@sanity/block-content-to-react'
import Image from '@components/image'

const serializers = {
  types: {
    imageBlock: Image,
    block(props) {
      switch (props.node.style) {
        case 'h1':
          return <h1>{props.children}</h1>

        case 'h2':
          return <h2>{props.children}</h2>

        case 'h3':
          return <h3>{props.children}</h3>

        case 'h4':
          return <h4>{props.children}</h4>

        case 'h5':
          return <h5>{props.children}</h5>

        case 'h6':
          return <h6>{props.children}</h6>

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
