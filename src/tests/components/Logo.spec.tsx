import { render, screen } from '@testing-library/react'

import { Logo } from '@/components/Logo'

describe('<Logo />', () => {
  it('should matches snapshot', () => {
    render(<Logo height={80} width={80} />)
    const element = screen.getByTestId('logo')

    expect(element).toMatchSnapshot()
  })

  it('should render with correct height', () => {
    render(<Logo height={80} width={80} />)
    const element = screen.getByTestId('logo')

    expect(element).toHaveAttribute('height', '80')
  })

  it('should render with correct width', () => {
    render(<Logo height={80} width={80} />)
    const element = screen.getByTestId('logo')

    expect(element).toHaveAttribute('width', '80')
  })

  it('should render with correct color', () => {
    render(<Logo height={80} width={80} />)
    const element = screen.getByTestId('logo')

    expect(element).toHaveClass('text-primary-500')
  })
})
