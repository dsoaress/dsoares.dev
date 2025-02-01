import { render } from '@testing-library/react'

import { Block } from '.'

describe('Block', () => {
  it('renders with default styles', () => {
    const { container } = render(<Block />)
    expect(container.firstChild).toHaveClass(
      'col-span-4 rounded-lg border border-slate-700 bg-slate-800 p-6'
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
})
