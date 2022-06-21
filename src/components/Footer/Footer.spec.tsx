import { render, screen } from '@testing-library/react'

import { Footer } from '.'

const footer = 'Footer'

jest.mock('@/components/Social', () => ({
  Social: () => <div />
}))

jest.mock('@/hooks/useData', () => ({
  useData: () => ({ t: { footer } })
}))

describe('<Footer />', () => {
  beforeEach(() => {
    render(<Footer />)
  })

  it('should matches snapshot', () => {
    expect(screen.getByTestId('footer')).toMatchSnapshot()
  })

  it('should render correct footer text', () => {
    expect(screen.getByText(footer)).toBeInTheDocument()
  })
})
