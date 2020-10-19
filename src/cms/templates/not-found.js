import React from 'react'
import NotFound from '@components/not-found'

const NotFoundPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  return <NotFound message={data.message} title={data.title} />
}

export default NotFoundPreview
