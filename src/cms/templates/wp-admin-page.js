import React from 'react'
import WPAdmin from '@components/wp-admin'

const WPAdminPage = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  return <WPAdmin video={getAsset(data.video)} />
}

export default WPAdminPage
