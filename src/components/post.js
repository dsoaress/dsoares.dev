import React from 'react'
import BackgroundImage from '@components/background-image'

const Post = ({ body, date, image, title }) => (
  <div className="container">
    <BackgroundImage
      image={image}
      className="rounded-xl shadow-md overflow-hidden mb-16"
    >
      <div className="grip gap-4 px-4 py-40 text-center bg-black bg-opacity-50">
        <span className="text-sm">{date}</span>
        <h1 className="m-0">{title}</h1>
      </div>
    </BackgroundImage>

    <div className="md:mx-16 lg:mx-40">{body}</div>
  </div>
)

export default Post
