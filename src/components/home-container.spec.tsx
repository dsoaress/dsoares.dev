import { render } from '@testing-library/react'
import { motion, type MotionProps } from 'framer-motion'
import type { HTMLAttributes } from 'react'

import { HomeContainer } from './home-container'

jest.mock('framer-motion', () => ({
  ...jest.requireActual('framer-motion'),
  motion: {
    div: jest.fn((props: MotionProps & HTMLAttributes<HTMLDivElement>) => <div {...props} />)
  }
}))

describe('HomeContainer', () => {
  it('renders with default styles', () => {
    const { container } = render(<HomeContainer>Test content</HomeContainer>)
    expect(container.firstChild).toHaveClass(
      'mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4'
    )
    expect(container).toHaveTextContent('Test content')
  })

  it('passes additional props to the container', () => {
    const { container } = render(
      <HomeContainer data-testid="home-container" aria-label="Home">
        Test content
      </HomeContainer>
    )
    expect(container.firstChild).toHaveAttribute('data-testid', 'home-container')
    expect(container.firstChild).toHaveAttribute('aria-label', 'Home')
  })

  it('applies framer-motion animation variants', () => {
    render(<HomeContainer />)
    expect(motion.div).toHaveBeenCalledWith(
      expect.objectContaining({
        initial: 'initial',
        animate: 'animate',
        transition: { staggerChildren: 0.05 }
      }),
      {}
    )
  })
})
