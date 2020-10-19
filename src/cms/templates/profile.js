import React from 'react'
import Profile from '@components/profile'

const ProfilePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  return (
    <Profile
      body={widgetFor('body')}
      image={getAsset(data.image)}
      title={data.title}
    />
  )
}

export default ProfilePreview
