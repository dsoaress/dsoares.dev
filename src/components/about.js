import React from 'react'
import Image from '@components/image'
import Social from '@components/social'

const About = ({ body, image, socialLinks, title }) => (
  <div className="container grid gap-8 grid-cols-1 md:grid-cols-2">
    <div className="grid gap-8 self-center">
      <h1 className="m-0">{title}</h1>
      {body}
      {socialLinks && <Social socialLinks={socialLinks} />}
    </div>
    <Image image={image} className="rounded-xl shadow-md" />
  </div>
)

export default About
