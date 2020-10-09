import React from 'react'
import { Link } from 'gatsby'

import PostMeta from '../PostMeta'
import * as S from './styled'

const PostItem = ({ slug, date, timeToRead, title, description, image }) => (
  <S.Wrapper>
    <S.Image fluid={image} />
    <S.TextWrapper>
      <PostMeta date={date} timeToRead={timeToRead} />
      <Link to={slug} alt={title}>
        <S.Title>{title}</S.Title>
      </Link>
      <p>{description}</p>
    </S.TextWrapper>
  </S.Wrapper>
)

export default PostItem
