import { render, screen } from '@testing-library/react'

import { InternalServerError } from '.'

const internalError = 'Internal server error'
const buttonLabel = 'Back to home'

jest.mock('@/hooks/useData', () => ({
  useData: () => ({
    t: {
      errors: {
        internalError,
        buttonLabel
      }
    }
  })
}))

describe('<InternalServerError />', () => {
  let element: ChildNode | null = null

  beforeEach(() => {
    const { container } = render(<InternalServerError />)
    const { firstChild } = container
    element = firstChild
  })

  it('should matches snapshot', () => {
    expect(element).toMatchSnapshot()
  })

  it('should render with correct status code', () => {
    expect(screen.getByRole('heading')).toHaveTextContent('500')
  })

  it('should render with correct error message', () => {
    expect(screen.getByText(internalError)).toHaveTextContent(internalError)
  })
})
