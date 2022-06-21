import { render, screen } from '@testing-library/react'

import { Error } from '.'

const statusCode = '404'
const errorMessage = 'Not found'
const buttonLabel = 'Back to home'

jest.mock('@/hooks/useData', () => ({
  useData: () => ({ t: { errors: { buttonLabel } } })
}))

describe('<Error />', () => {
  let element: ChildNode | null = null

  beforeEach(() => {
    const { container } = render(<Error statusCode={statusCode} errorMessage={errorMessage} />)
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
    expect(screen.getByText(errorMessage)).toHaveTextContent(errorMessage)
  })

  it('should render with correct button label', () => {
    expect(screen.getByRole('button')).toHaveTextContent(buttonLabel)
  })
})
