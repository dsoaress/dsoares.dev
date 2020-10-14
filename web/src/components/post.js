import React from 'react'
import BackgroundImage from 'gatsby-background-image'

import BlockContent from '@components/block-content'

const Post = ({ post }) => (
  <div className="container">
    <BackgroundImage
      fluid={post.mainImage?.asset.fluid}
      className="rounded-xl shadow-md overflow-hidden mb-16"
    >
      <div className="grip gap-4 px-4 py-40 text-center bg-black bg-opacity-50">
        <span className="text-sm">{post.date}</span>
        <h1 className="m-0">{post.title}</h1>
      </div>
    </BackgroundImage>
    <div className="md:mx-16 lg:mx-40">
      {post._rawBody && (
        <BlockContent blocks={post._rawBody} className="mx-16" />
      )}
    </div>
  </div>
)

export default Post
