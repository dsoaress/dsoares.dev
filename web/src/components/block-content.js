import React from 'react'
import BaseBlockContent from '@sanity/block-content-to-react'
import Image from '@components/image'

const serializers = {
  types: {
    imageBlock: Image
  }
}

const BlockContent = ({ blocks }) => (
  <BaseBlockContent blocks={blocks} serializers={serializers} />
)

export default BlockContent
