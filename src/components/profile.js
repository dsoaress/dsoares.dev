import React from 'react'
import { Background } from '@components/image'
import Social from '@components/social'

const Profile = ({ body, className, image, socialLinks, title }) => (
  <div
    className={`container grid gap-8 md:grid-cols-4 lg:grid-cols-5 items-center ${className}`}
  >
    <Background src={image} className="hidden md:block min-h-full" />
    <div className="md:col-span-3 lg:col-span-4 grid gap-8 md:my-16">
      <h1 className="lg:text-4xl m-0">{title}</h1>
      <div className="lg:text-lg">{body}</div>
      {socialLinks && <Social socialLinks={socialLinks} />}
    </div>
  </div>
)

export default Profile
