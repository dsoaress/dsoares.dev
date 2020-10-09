import React from 'react'

import * as S from './styled'

const PostMeta = ({ date, timeToRead }) => (
  <S.Meta>
    <S.CalendarIcon /> {date}
    {/* <S.ClockIcon /> {timeToRead} min de leitura */}
  </S.Meta>
)

export default PostMeta
