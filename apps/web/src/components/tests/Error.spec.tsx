import { render, screen } from '@testing-library/react'

import { data } from '@/mocks'

import { Error } from '../Error'

describe('<Error />', () => {
  let element: ChildNode | null = null
  const statusCode = '404'

  beforeEach(() => {
    const { container } = render(
      <Error statusCode={statusCode} errorMessage={data.t.errors.notFound} />
    )
    const { firstChild } = container
    element = firstChild
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

  it('should render with correct button label', () => {
    expect(screen.getByRole('button')).toHaveTextContent(data.t.errors.buttonLabel)
  })
})
