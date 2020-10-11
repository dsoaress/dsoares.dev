import React from 'react'
import styled from 'styled-components'
import {
  border,
  color,
  grid,
  layout,
  shadow,
  space,
  typography
} from 'styled-system'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import { H3 } from '@components/typography'

const Grid = styled('div')(grid, layout)
const Card = styled('div')(border, color, shadow)
const Image = styled(Img)(border, layout)
const TextWrapper = styled('div')(space)
const Date = styled('span')(color, typography)

const Posts = ({ data }) => (
  <Grid display="grid" gridGap={4}>
    {data.map(({ node }, i) => (
      <Link to={`/${node.slug?.current}/`} alt={node.title}>
        <Card borderRadius={2} bg="muted" boxShadow="0 0 30px #020204" key={i}>
          <Image
            borderTopLeftRadius={2}
            borderTopRightRadius={2}
            height="230px"
            fluid={node.mainImage?.asset.fluid}
          />
          <TextWrapper p={3}>
            <H3 mt={0} mb={2}>
              {node.title}
            </H3>
            <Date color="primary" fontSize="1">
              {node.date}
            </Date>
          </TextWrapper>
        </Card>
      </Link>
    ))}
  </Grid>
)

export default Posts
