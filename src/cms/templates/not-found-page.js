import React from 'react'
import NotFound from '@components/not-found'

const NotFoundPage = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  return <NotFound message={data.message} title={data.title} />
}

export default NotFoundPage
