import { render, screen } from '@testing-library/react'

import { Section } from '../Section'

describe('<Section />', () => {
  it('should matches snapshot', () => {
    render(<Section>Children</Section>)
    const element = screen.getByText('Children')

    expect(element).toMatchSnapshot()
  })

  it('should render with children', () => {
    render(<Section>Children</Section>)
    const element = screen.getByText('Children')

    expect(element).toHaveTextContent('Children')
  })

  it('should render with with additional className', () => {
    render(<Section className="test">Children</Section>)
    const element = screen.getByText('Children')

    expect(element).toHaveClass('test')
  })
})
