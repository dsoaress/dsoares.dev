import React from 'react'
import { AiTwotoneHeart } from 'react-icons/ai'

const Footer = () => (
  <footer className="container my-16 grid text-xs text-center">
    <span>
      Made with <AiTwotoneHeart className="inline mb-1 text-sm text-red-500" />{' '}
      and{' '}
      <a
        href="https://gatsbyjs.org"
        alt="Gatsby"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gatsby
      </a>
    </span>
    <span>Daniel Soares</span>
  </footer>
)

export default Footer
