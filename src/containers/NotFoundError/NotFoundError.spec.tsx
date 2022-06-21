import { render, screen } from '@testing-library/react'

import { data } from '@/mocks'

import { NotFoundError } from '.'

describe('<NotFoundError />', () => {
  let element: ChildNode | null = null
  const statusCode = '404'

  beforeEach(() => {
    const { container } = render(<NotFoundError />)
    element = container
  })

  it('should matches snapshot', () => {
    expect(element).toMatchSnapshot()
  })

  it('should render with correct status code', () => {
    expect(screen.getByRole('heading')).toHaveTextContent(statusCode)
  })

  it('should render with correct error message', () => {
    expect(screen.getByText(data.t.errors.notFound)).toHaveTextContent(data.t.errors.notFound)
  })
})
