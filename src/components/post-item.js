import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import PostMeta from './post-meta'

const PostItem = ({ slug, date, timeToRead, title, description, image }) => (
  <div>
    <Img fluid={image} />
    <div>
      <PostMeta date={date} timeToRead={timeToRead} />
      <Link to={slug} alt={title}>
        <h2>{title}</h2>
      </Link>
      <p>{description}</p>
    </div>
  </div>
)

export default PostItem
