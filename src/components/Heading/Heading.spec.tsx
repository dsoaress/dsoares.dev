import { render, screen } from '@testing-library/react'

import { Heading } from '.'

describe('<Heading />', () => {
  it('should matches snapshot', () => {
    render(<Heading>Children</Heading>)
    const element = screen.getByText('Children')

    expect(element).toMatchSnapshot()
  })

  it('should render with children', () => {
    render(<Heading>Children</Heading>)
    const element = screen.getByText('Children')

    expect(element).toHaveTextContent('Children')
  })

  it('should render with with additional className', () => {
    render(<Heading className="test">Children</Heading>)
    const element = screen.getByText('Children')

    expect(element).toHaveClass('test')
  })

  it('should render with with xs variant', () => {
    render(<Heading size="xs">Children</Heading>)
    const element = screen.getByText('Children')

    expect(element).toHaveClass('text-xs')
  })

  it('should render with with sm variant', () => {
    render(<Heading size="sm">Children</Heading>)
    const element = screen.getByText('Children')

    expect(element).toHaveClass('text-sm')
  })

  it('should render with with md variant', () => {
    render(<Heading size="md">Children</Heading>)
    const element = screen.getByText('Children')

    expect(element).toHaveClass('text-base')
  })

  it('should render with with lg variant', () => {
    render(<Heading size="lg">Children</Heading>)
    const element = screen.getByText('Children')

    expect(element).toHaveClass('text-lg')
  })

  it('should render with with xl variant', () => {
    render(<Heading size="xl">Children</Heading>)
    const element = screen.getByText('Children')

    expect(element).toHaveClass('text-xl')
  })

  it('should render with with 2xl variant', () => {
    render(<Heading size="2xl">Children</Heading>)
    const element = screen.getByText('Children')

    expect(element).toHaveClass('text-2xl')
  })

  it('should render with with 3xl variant', () => {
    render(<Heading size="3xl">Children</Heading>)
    const element = screen.getByText('Children')

    expect(element).toHaveClass('text-3xl')
  })

  it('should render with with 4xl variant', () => {
    render(<Heading size="4xl">Children</Heading>)
    const element = screen.getByText('Children')

    expect(element).toHaveClass('text-4xl')
  })

  it('should render with with 5xl variant', () => {
    render(<Heading size="5xl">Children</Heading>)
    const element = screen.getByText('Children')

    expect(element).toHaveClass('text-5xl')
  })

  it('should render as h2', () => {
    render(<Heading as="h2">Children</Heading>)
    const element = screen.getByText('Children')

    expect(element.tagName).toBe('H2')
  })
})
