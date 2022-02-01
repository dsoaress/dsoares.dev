import { fireEvent, render, screen } from '@testing-library/react'

import { Button } from '@/components/Button'

describe('<Button />', () => {
  it('should matches snapshot', () => {
    render(<Button>Children</Button>)
    const element = screen.getByRole('button')

    expect(element).toMatchSnapshot()
  })

  it('should render with children', () => {
    render(<Button>Children</Button>)
    const element = screen.getByRole('button')

    expect(element).toHaveTextContent('Children')
  })

  it('should render with with additional className', () => {
    render(<Button className="test">Children</Button>)
    const element = screen.getByRole('button')

    expect(element).toHaveClass('test')
  })

  it('should call onClick handler', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Children</Button>)
    const element = screen.getByRole('button')
    fireEvent.click(element)

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('should render with disabled attribute', () => {
    render(<Button disabled>Children</Button>)
    const element = screen.getByRole('button')

    expect(element).toHaveAttribute('disabled')
  })

  it('should render with type attribute', () => {
    render(<Button type="submit">Children</Button>)
    const element = screen.getByRole('button')

    expect(element).toHaveAttribute('type', 'submit')
  })
})
