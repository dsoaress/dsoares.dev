import React from 'react'
import Social from '@components/social'

const BioShort = ({ body, socialLinks, title }) => (
  <div className="container grid gap-8">
    <h1 className="m-0">{title}</h1>
    {body}
    {socialLinks && <Social socialLinks={socialLinks} />}
  </div>
)

export default BioShort
