import React from 'react'
import styled from 'styled-components'
import {
  border,
  color,
  grid,
  layout,
  space,
  shadow,
  typography
} from 'styled-system'
import BackgroundImage from 'gatsby-background-image'

import { H1 } from '@components/typography'
import BlockContent from '@components/block-content'

const Image = styled(BackgroundImage)(border, shadow, space)
const Header = styled('div')(color, grid, layout, space, typography)
const Title = styled(H1)(space)
const Date = styled('span')(color)

const Post = ({ post }) => (
  <>
    <Image
      fluid={post.mainImage?.asset.fluid}
      borderRadius={2}
      boxShadow="0 0 30px #020204"
    >
      <Header
        display="grid"
        gridGap={4}
        px={4}
        py={6}
        mb={5}
        textAlign="center"
        bg="rgba(0, 0, 0, 0.6)"
      >
        <Date color="primary">{post.date}</Date>
        <Title m="0">{post.title}</Title>
      </Header>
    </Image>
    {post._rawBody && <BlockContent blocks={post._rawBody} />}
  </>
)

export default Post
