import React from 'react'
import Img from 'gatsby-image'
import Social from '@components/social'

const About = ({ data }) => (
  <div className="container grid gap-8 grid-cols-1 md:grid-cols-2">
    <div className="grid gap-8">
      <h1 className="m-0">{data.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.html }} />
      <Social />
    </div>
    <Img
      fluid={data.frontmatter.image?.childImageSharp.fluid}
      className="rounded-xl shadow-md"
    />
  </div>
)

export default About
