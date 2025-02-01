import { render } from '@testing-library/react'

import { About } from '.'

describe('About', () => {
  it('renders the content inside Block', () => {
    const { getByText } = render(<About />)
    expect(getByText(/Specializing in/i)).toBeInTheDocument()
    expect(getByText(/scalable, robust applications/i)).toBeInTheDocument()
  })

  it('renders Block with the correct className', () => {
    const { container } = render(<About />)
    expect(container.firstChild).toHaveClass('col-span-12 text-3xl leading-snug')
  })

  it('renders text with the correct className', () => {
    const { getByText } = render(<About />)
    expect(getByText(/Specializing in/i)).toHaveClass('text-zinc-400')
    expect(getByText(/scalable, robust applications/i)).toHaveClass('text-zinc-50')
  })
})
