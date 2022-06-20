import { render, screen } from '@testing-library/react'

import { Container } from '@/components/Container'

describe('<Container />', () => {
  it('should matches snapshot', () => {
    render(<Container>Children</Container>)
    const element = screen.getByRole('main')

    expect(element).toMatchSnapshot()
  })

  it('should render with children', () => {
    render(<Container>Children</Container>)
    const element = screen.getByRole('main')

    expect(element).toHaveTextContent('Children')
  })

  it('should render with with additional className', () => {
    render(<Container className="test">Children</Container>)
    const element = screen.getByRole('main')

    expect(element).toHaveClass('test')
  })
})
