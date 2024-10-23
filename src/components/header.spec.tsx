import { render } from '@testing-library/react'
import type { MotionProps } from 'framer-motion'
import type { ImageProps } from 'next/image'
import type { HTMLAttributes } from 'react'

import { Header } from '.'

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: ImageProps): JSX.Element => {
    // biome-ignore lint/nursery/noImgElement: this is a mock
    return <img {...props} src={src as string} alt={alt} />
  }
}))

jest.mock('./block', () => ({
  Block: jest.fn((props: MotionProps & HTMLAttributes<HTMLDivElement>) => <div {...props} />)
}))

describe('Header', () => {
  it('renders the avatar image with correct attributes and styles', () => {
    const { getByAltText } = render(<Header />)
    const image = getByAltText('avatar')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', 'https://github.com/dsoaress.png')
    expect(image).toHaveClass('mb-4 size-16 rounded-full object-cover object-top')
  })

  it('renders the heading with correct content', () => {
    const { getByText } = render(<Header />)
    const title = getByText("Hi, I'm Daniel Soares.")
    const subtitle = getByText('I build cool things with Go, Node and React.')
    expect(title).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
  })

  it('renders the "Get in touch" link with correct attributes and styles', () => {
    const { getByRole } = render(<Header />)
    const link = getByRole('link', { name: /get in touch/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://www.linkedin.com/in/dsoaress')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    expect(link).toHaveClass('flex items-center gap-1 text-primary-300 hover:underline')
  })
})
