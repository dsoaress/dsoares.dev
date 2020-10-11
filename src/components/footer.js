import React from 'react'

import Container from '@components/container'
import { AiTwotoneHeart } from 'react-icons/ai'

const Footer = () => (
  <footer>
    <Container>
      <p>
        Made with <AiTwotoneHeart /> and{' '}
        <a href="https://gatsbyjs.org" alt="Gatsby" rel="">
          Gatsby
        </a>
      </p>
      <p>Daniel Soares</p>
    </Container>
  </footer>
)

export default Footer
