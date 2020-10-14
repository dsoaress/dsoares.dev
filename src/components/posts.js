import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Posts = ({ posts, title }) => (
  <section className="container">
    <h2>{title}</h2>
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map(({ node }, i) => (
        <Link
          to={`/blog/${node.slug?.current}/`}
          alt={node.title}
          className="border-none"
        >
          <div className="rounded-xl bg-muted shadow-md" key={i}>
            <Img
              fluid={node.mainImage?.asset.fluid}
              alt={node.title}
              className="rounded-t-xl post-img"
            />
            <div className="grid gap-2 p-6">
              <h3 className="text-white text-xl m-0">{node.title}</h3>
              <span className="text-highLight text-sm">{node.date}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </section>
)

export default Posts
