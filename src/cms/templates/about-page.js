import React from 'react'
import About from '@components/about'

const AboutPage = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  return (
    <About
      body={widgetFor('body')}
      image={getAsset(data.image)}
      title={data.title}
    />
  )
}

export default AboutPage
