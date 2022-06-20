import { render, screen } from '@testing-library/react'

import { Error } from '@/components/Error'

const statusCode = 404
const errorMessage = 'Not found'
const buttonLabel = 'Back to home'

jest.mock('@/hooks/useData', () => {
  return {
    useData() {
      return {
        t: {
          errors: {
            buttonLabel: 'Back to home'
          }
        }
      }
    }
  }
})

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
    expect(screen.getByText(statusCode)).toBeInTheDocument()
  })

  it('should render with correct error message', () => {
    expect(screen.getByText(errorMessage)).toBeInTheDocument()
  })

  it('should render with correct button label', () => {
    expect(screen.getByText(buttonLabel)).toBeInTheDocument()
  })
})
