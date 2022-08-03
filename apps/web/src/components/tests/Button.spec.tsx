import { fireEvent, render, screen } from '@testing-library/react'
import { FiActivity } from 'react-icons/fi'

import { Button } from '../Button'

describe('<Button />', () => {
  it('should matches snapshot', () => {
    render(<Button>Children</Button>)
    expect(screen.getByRole('button')).toMatchSnapshot()
  })

  it('should render with children', () => {
    render(<Button>Children</Button>)
    expect(screen.getByRole('button')).toHaveTextContent('Children')
  })

  it('should render with with additional className', () => {
    render(<Button className="test">Children</Button>)
    expect(screen.getByRole('button')).toHaveClass('test')
  })

  it('should render with icon', () => {
    render(<Button icon={FiActivity}>Children</Button>)
    expect(screen.getByRole('button')).toMatchSnapshot()
  })

  it('should call onClick handler', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Children</Button>)
    const element = screen.getByRole('button')

    expect(onClick).not.toHaveBeenCalled()

    fireEvent.click(element)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('should render with disabled attribute', () => {
    render(<Button disabled>Children</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('disabled')
  })

  it('should render with type attribute', () => {
    render(<Button type="submit">Children</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')
  })
})
