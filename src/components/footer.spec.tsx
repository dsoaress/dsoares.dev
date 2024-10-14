import { render } from '@testing-library/react'
import type { HTMLAttributes } from 'react'

import { Footer } from '.'

jest.mock('next/link', () => ({
  __esModule: true,
  default: jest.fn(({ children, ...props }: HTMLAttributes<HTMLAnchorElement>) => (
    <a {...props}>{children}</a>
  ))
}))

describe('Footer', () => {
  it('renders the footer with correct text content', () => {
    const { getByText } = render(<Footer />)
    const paragraph = getByText(/Made with ❤️ with/)
    expect(paragraph).toBeInTheDocument()
    expect(paragraph).toHaveClass('text-center text-neutral-400')
  })

  it('renders the Next.js link with correct attributes', () => {
    const { getByRole } = render(<Footer />)
    const link = getByRole('link', { name: /Next.js/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://nextjs.org/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    expect(link).toHaveClass('font-medium text-primary-300 hover:underline')
  })
})
