import React from 'react'
import Social from '@components/social'

const BioShort = ({ text, title }) => (
  <div className="container grid gap-8">
    <h1 className="m-0">{title}</h1>
    <div
      dangerouslySetInnerHTML={{
        __html: text
      }}
    />
    <Social />
  </div>
)

export default BioShort
