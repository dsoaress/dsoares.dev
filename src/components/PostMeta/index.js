import React from 'react'

import * as S from './styled'

const PostMeta = ({ date, timeToRead }) => (
  <S.PostMeta>
    <S.CalendarIcon /> {date} <S.ClockIcon /> {timeToRead} min de leitura
  </S.PostMeta>
)

export default PostMeta
