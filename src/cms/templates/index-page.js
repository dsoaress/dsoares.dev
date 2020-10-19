import React from 'react'
import BioShort from '@components/bio-short'

const IndexPage = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  return (
    <BioShort
      body={widgetFor('body')}
      image={getAsset(data.image)}
      title={data.title}
    />
  )
}

export default IndexPage
