import { render } from '@testing-library/react'
import type { MotionProps } from 'framer-motion'
import type { HTMLAttributes } from 'react'

import { About, Block } from '.'

jest.mock('./block', () => ({
  Block: jest.fn((props: MotionProps & HTMLAttributes<HTMLDivElement>) => <div {...props} />)
}))

describe('About', () => {
  it('renders the content inside Block', () => {
    const { getByText } = render(<About />)
    expect(getByText(/As a developer, I have a passion for/i)).toBeInTheDocument()
    expect(getByText(/building robust and scalable applications/i)).toBeInTheDocument()
  })

  it('renders Block with the correct className', () => {
    render(<About />)

    expect(Block).toHaveBeenCalledWith(
      expect.objectContaining({
        className: 'col-span-12 text-3xl leading-snug'
      }),
      {}
    )
  })

  it('renders text with the correct className', () => {
    const { getByText } = render(<About />)
    expect(getByText(/As a developer, I have a passion for/i)).toHaveClass('text-neutral-400')
    expect(getByText(/building robust and scalable applications/i)).toHaveClass('text-neutral-50')
  })
})
