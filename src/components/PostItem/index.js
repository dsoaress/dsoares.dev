import React from 'react'
import { Link } from 'gatsby'

import PostMeta from '../PostMeta'
import * as S from './styled'

const PostItem = ({ slug, date, timeToRead, title, description, image }) => (
  <S.PostItemWrapper>
    <S.PostItemImage fluid={image} />
    <S.PostItemText>
      <PostMeta date={date} timeToRead={timeToRead} />
      <Link to={slug} alt={title}>
        <S.PostItemTitle>{title}</S.PostItemTitle>
      </Link>
      <p>{description}</p>
    </S.PostItemText>
  </S.PostItemWrapper>
)

export default PostItem
