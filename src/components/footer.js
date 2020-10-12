import React from 'react'
import styled from 'styled-components'
import { color, grid, layout, space, typography } from 'styled-system'

import Container from '@components/container'
import { AiTwotoneHeart } from 'react-icons/ai'

const FooterWrapper = styled('footer')(grid, layout, typography)
const Icon = styled(AiTwotoneHeart)(color, space)

const Footer = () => (
  <Container>
    <FooterWrapper display="grid" textAlign="center" fontSize={1}>
      <span>
        Made with <Icon size="16px" mb="-2px" color="primary" /> and{' '}
        <a href="https://gatsbyjs.org" alt="Gatsby" rel="">
          Gatsby
        </a>
      </span>
      <span>Daniel Soares</span>
    </FooterWrapper>
  </Container>
)

export default Footer
