import { render, screen } from '@testing-library/react'

import { Container } from '../Container'

describe('<Container />', () => {
  it('should matches snapshot', () => {
    render(<Container>Children</Container>)
    expect(screen.getByRole('main')).toMatchSnapshot()
  })

  it('should render with children', () => {
    render(<Container>Children</Container>)
    expect(screen.getByRole('main')).toHaveTextContent('Children')
  })

  it('should render with with additional className', () => {
    render(<Container className="test">Children</Container>)
    expect(screen.getByRole('main')).toHaveClass('test')
  })
})
