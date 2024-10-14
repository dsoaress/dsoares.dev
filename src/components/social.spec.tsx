import { render } from '@testing-library/react'
import type { MotionProps } from 'framer-motion'
import type { HTMLAttributes } from 'react'

import { Block, Social } from '.'

jest.mock('next/link', () => ({
  __esModule: true,
  default: jest.fn(({ children, ...props }: HTMLAttributes<HTMLAnchorElement>) => (
    <a {...props}>{children}</a>
  ))
}))

jest.mock('./block', () => ({
  Block: jest.fn((props: MotionProps & HTMLAttributes<HTMLDivElement>) => <div {...props} />)
}))

describe('Social', () => {
  it('renders all social media links', () => {
    const { getByLabelText } = render(<Social />)
    expect(getByLabelText('GitHub')).toBeInTheDocument()
    expect(getByLabelText('LinkedIn')).toBeInTheDocument()
    expect(getByLabelText('Dev')).toBeInTheDocument()
    expect(getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('passes correct className to each Block', () => {
    render(<Social />)

    expect(Block).toHaveBeenCalledWith(
      expect.objectContaining({
        className: expect.stringContaining('col-span-6 md:col-span-3 relative bg-neutral-50')
      }),
      {}
    )
    expect(Block).toHaveBeenCalledWith(
      expect.objectContaining({
        className: expect.stringContaining('col-span-6 md:col-span-3 relative bg-blue-500')
      }),
      {}
    )
    expect(Block).toHaveBeenCalledWith(
      expect.objectContaining({
        className: expect.stringContaining('col-span-6 md:col-span-3 relative bg-black')
      }),
      {}
    )
    expect(Block).toHaveBeenCalledWith(
      expect.objectContaining({
        className: expect.stringContaining(
          'col-span-6 md:col-span-3 relative bg-gradient-to-r from-pink-500 to-yellow-500'
        )
      }),
      {}
    )
  })

  it('renders each social link with correct href and target attributes', () => {
    const { getByLabelText } = render(<Social />)
    expect(getByLabelText('GitHub')).toHaveAttribute('href', 'https://github.com/dsoaress')
    expect(getByLabelText('LinkedIn')).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/dsoaress'
    )
    expect(getByLabelText('Dev')).toHaveAttribute('href', 'https://dev.to/dsoares')
    expect(getByLabelText('Instagram')).toHaveAttribute('href', 'https://instagram.com/dansoares')
    expect(getByLabelText('GitHub')).toHaveAttribute('target', '_blank')
    expect(getByLabelText('GitHub')).toHaveAttribute('rel', 'noopener noreferrer')
    expect(getByLabelText('LinkedIn')).toHaveAttribute('target', '_blank')
    expect(getByLabelText('LinkedIn')).toHaveAttribute('rel', 'noopener noreferrer')
    expect(getByLabelText('Dev')).toHaveAttribute('target', '_blank')
    expect(getByLabelText('Dev')).toHaveAttribute('rel', 'noopener noreferrer')
    expect(getByLabelText('Instagram')).toHaveAttribute('target', '_blank')
    expect(getByLabelText('Instagram')).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
