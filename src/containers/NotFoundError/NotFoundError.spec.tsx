import { render, screen } from '@testing-library/react'

import { NotFoundError } from '.'

const notFound = 'Not found'
const buttonLabel = 'Back to home'

jest.mock('@/hooks/useData', () => ({
  useData: () => ({
    t: {
      errors: {
        notFound,
        buttonLabel
      }
    }
  })
}))

describe('<NotFoundError />', () => {
  let element: ChildNode | null = null

  beforeEach(() => {
    const { container } = render(<NotFoundError />)
    const { firstChild } = container
    element = firstChild
  })

  it('should matches snapshot', () => {
    expect(element).toMatchSnapshot()
  })

  it('should render with correct status code', () => {
    expect(screen.getByRole('heading')).toHaveTextContent('404')
  })

  it('should render with correct error message', () => {
    expect(screen.getByText(notFound)).toHaveTextContent(notFound)
  })
})
