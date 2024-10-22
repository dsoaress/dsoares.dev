import { render } from '@testing-library/react'
import { type MotionProps, motion } from 'framer-motion'
import type { HTMLAttributes } from 'react'

import { Block } from '.'

jest.mock('framer-motion', () => ({
  ...jest.requireActual('framer-motion'),
  motion: {
    div: jest.fn((props: MotionProps & HTMLAttributes<HTMLDivElement>) => <div {...props} />)
  }
}))

describe('Block', () => {
  it('renders with default styles', () => {
    const { container } = render(<Block />)
    expect(container.firstChild).toHaveClass(
      'col-span-4 rounded-lg border border-neutral-700 bg-neutral-800 p-6'
    )
  })

  it('accepts additional class names', () => {
    const { container } = render(<Block className="extra-class" />)
    expect(container.firstChild).toHaveClass('extra-class')
  })

  it('passes other props to the div', () => {
    const { getByTestId } = render(<Block data-testid="block" aria-label="block" />)
    expect(getByTestId('block')).toHaveAttribute('aria-label', 'block')
  })

  it('applies framer-motion animation variants', () => {
    render(<Block />)
    expect(motion.div).toHaveBeenCalledWith(
      expect.objectContaining({
        variants: {
          initial: { scale: 0.5, y: 50, opacity: 0 },
          animate: { scale: 1, y: 0, opacity: 1 }
        },
        transition: {
          type: 'spring',
          mass: 3,
          stiffness: 400,
          damping: 50
        }
      }),
      {}
    )
  })
})
