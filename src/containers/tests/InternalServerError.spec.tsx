import { render, screen } from '@testing-library/react'

import { data } from '@/mocks'

import { InternalServerError } from '../InternalServerError'

describe('<InternalServerError />', () => {
  let element: ChildNode | null = null
  const statusCode = '500'

  beforeEach(() => {
    const { container } = render(<InternalServerError />)
    element = container
  })

  it('should matches snapshot', () => {
    expect(element).toMatchSnapshot()
  })

  it('should render with correct status code', () => {
    expect(screen.getByRole('heading')).toHaveTextContent(statusCode)
  })

  it('should render with correct error message', () => {
    expect(screen.getByText(data.t.errors.internalError)).toHaveTextContent(
      data.t.errors.internalError
    )
  })
})
