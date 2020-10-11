import React from 'react'
import { BiCalendar } from 'react-icons/bi'

const PostMeta = ({ date }) => (
  <span>
    <BiCalendar /> {date}
  </span>
)

export default PostMeta
