import React from 'react'
import BackgroundImage from 'gatsby-background-image'

const Post = ({ post }) => (
  <div className="container">
    <BackgroundImage
      fluid={post.frontmatter.image?.childImageSharp.fluid}
      className="rounded-xl shadow-md overflow-hidden mb-16"
    >
      <div className="grip gap-4 px-4 py-40 text-center bg-black bg-opacity-50">
        <span className="text-sm">{post.frontmatter.date}</span>
        <h1 className="m-0">{post.frontmatter.title}</h1>
      </div>
    </BackgroundImage>
    <div
      className="md:mx-16 lg:mx-40"
      dangerouslySetInnerHTML={{
        __html: post.html
      }}
    />
  </div>
)

export default Post
