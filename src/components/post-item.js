import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import PostMeta from './post-meta'

const PostItem = ({ date, image, slug, title }) => (
  <div>
    <Img fluid={image} />
    <div>
      <Link to={slug} alt={title}>
        <h2>{title}</h2>
      </Link>
      <PostMeta date={date} />
    </div>
  </div>
)

export default PostItem
