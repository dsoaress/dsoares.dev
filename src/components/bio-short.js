import React from 'react'
import styled from 'styled-components'
import { grid, layout } from 'styled-system'

import { H1 } from '@components/typography'
import BlockContent from '@components/block-content'
import Social from '@components/social'

const Wrapper = styled('div')(grid, layout)
const Title = styled(H1)(layout)

const BioShort = ({ text, title }) => (
  <Wrapper display="grid" gridGap={4}>
    <Title m="0">{title}</Title>
    {text && <BlockContent blocks={text} />}
    <Social />
  </Wrapper>
)

export default BioShort
