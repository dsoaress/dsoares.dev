import React from 'react'
import BackgroundImage from 'gatsby-background-image'

import BlockContent from '@components/block-content'

const Post = ({ post }) => (
  <div className="container">
    <BackgroundImage
      fluid={post.mainImage?.asset.fluid}
      className="rounded-xl shadow-xl overflow-hidden"
    >
      <div className="grip gap-4 px-4 py-40 center">
        <span className="text-teal-300 text-sm">{post.date}</span>
        <h1 className="text-white m-0">{post.title}</h1>
      </div>
    </BackgroundImage>
    {post._rawBody && <BlockContent blocks={post._rawBody} />}
  </div>
)

export default Post
