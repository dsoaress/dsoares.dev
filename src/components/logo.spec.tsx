import { render } from '@testing-library/react'

import { Logo } from '.'

describe('Logo', () => {
  it('renders an SVG with the provided size', () => {
    const { container } = render(<Logo size={100} />)
    const svgElement = container.firstChild
    expect(svgElement).toBeInTheDocument()
    expect(svgElement).toHaveAttribute('width', '100')
    expect(svgElement).toHaveAttribute('height', '100')
  })

  it('applies additional class names passed via props', () => {
    const { container } = render(<Logo size={100} className="extra-class" />)
    const svgElement = container.firstChild
    expect(svgElement).toHaveClass('fill-current extra-class')
  })

  it('renders with default class "fill-current" even without additional classes', () => {
    const { container } = render(<Logo size={100} />)
    const svgElement = container.firstChild
    expect(svgElement).toHaveClass('fill-current')
  })

  it('passes additional props to the SVG element', () => {
    const { getByLabelText } = render(<Logo size={100} aria-label="Logo Icon" />)
    const svgElement = getByLabelText('Logo Icon')
    expect(svgElement).toBeInTheDocument()
  })
})
