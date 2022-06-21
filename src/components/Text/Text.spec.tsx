import { render, screen } from '@testing-library/react'

import { Text } from '.'

describe('<Text />', () => {
  it('should matches snapshot', () => {
    render(<Text>Children</Text>)
    const element = screen.getByText('Children')

    expect(element).toMatchSnapshot()
  })

  it('should render with children', () => {
    render(<Text>Children</Text>)
    const element = screen.getByText('Children')

    expect(element).toHaveTextContent('Children')
  })

  it('should render with with additional className', () => {
    render(<Text className="test">Children</Text>)
    const element = screen.getByText('Children')

    expect(element).toHaveClass('test')
  })

  it('should render with with faded variant', () => {
    render(<Text faded>Children</Text>)
    const element = screen.getByText('Children')

    expect(element).toHaveClass('text-neutral-600')
  })

  it('should render with with xs variant', () => {
    render(<Text size="xs">Children</Text>)
    const element = screen.getByText('Children')

    expect(element).toHaveClass('text-xs')
  })

  it('should render with with sm variant', () => {
    render(<Text size="sm">Children</Text>)
    const element = screen.getByText('Children')

    expect(element).toHaveClass('text-sm')
  })

  it('should render with with md variant', () => {
    render(<Text size="md">Children</Text>)
    const element = screen.getByText('Children')

    expect(element).toHaveClass('text-base')
  })

  it('should render with with lg variant', () => {
    render(<Text size="lg">Children</Text>)
    const element = screen.getByText('Children')

    expect(element).toHaveClass('text-lg')
  })

  it('should render with with xl variant', () => {
    render(<Text size="xl">Children</Text>)
    const element = screen.getByText('Children')

    expect(element).toHaveClass('text-xl')
  })

  it('should render with with 2xl variant', () => {
    render(<Text size="2xl">Children</Text>)
    const element = screen.getByText('Children')

    expect(element).toHaveClass('text-2xl')
  })

  it('should render with with 3xl variant', () => {
    render(<Text size="3xl">Children</Text>)
    const element = screen.getByText('Children')

    expect(element).toHaveClass('text-3xl')
  })

  it('should render with with 4xl variant', () => {
    render(<Text size="4xl">Children</Text>)
    const element = screen.getByText('Children')

    expect(element).toHaveClass('text-4xl')
  })

  it('should render with with 5xl variant', () => {
    render(<Text size="5xl">Children</Text>)
    const element = screen.getByText('Children')

    expect(element).toHaveClass('text-5xl')
  })

  it('should render as span', () => {
    render(<Text as="span">Children</Text>)
    const element = screen.getByText('Children')

    expect(element.tagName).toBe('SPAN')
  })
})
