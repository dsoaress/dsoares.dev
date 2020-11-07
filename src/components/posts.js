import React from 'react'
import { Link } from 'gatsby'
import { Image } from '@components/image'

const Posts = ({ posts, title }) => (
  <section className="container">
    <h2 className="mb-8">{title}</h2>
    <div className="grid gap-4 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map(({ node }, i) => (
        <Link
          to={node.fields.slug}
          alt={node.frontmatter.title}
          className="border-none"
          key={i}
        >
          <div className="bg-muted rounded-xl shadow-md">
            <Image
              src={node.frontmatter.image}
              alt={node.frontmatter.title}
              className="rounded-t-xl rounded-b-none shadow-none h-56"
            />
            <div className="grid gap-2 p-6">
              <h3 className="text-default hover:text-highLight transition-colors duration-500 text-xl m-0">
                {node.frontmatter.title}
              </h3>
              <span className="text-highLight text-sm">
                {node.frontmatter.date}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </section>
)

export default Posts
