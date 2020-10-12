import React from 'react'
import styled from 'styled-components'
import { border, grid, layout, shadow } from 'styled-system'
import Img from 'gatsby-image'

import BlockContent from '@components/block-content'
import Social from '@components/social'
import { H1 } from '@components/typography'

const Grid = styled('div')(grid, layout)
const Wrapper = styled('div')(grid, layout)
const Title = styled(H1)(layout)
const Image = styled(Img)(border, shadow)

const About = ({ data }) => (
  <Grid
    display="grid"
    gridGap={4}
    gridTemplateColumns="repeat(auto-fit, minmax(360px, 1fr))"
  >
    <Wrapper display="grid" gridGap={4}>
      <Title m="0">{data.title}</Title>
      {data._rawText && <BlockContent blocks={data._rawText} />}
      <Social />
    </Wrapper>
    <Image
      fluid={data.image?.asset.fluid}
      borderRadius={2}
      boxShadow="0 0 30px #020204"
    />
  </Grid>
)

export default About
