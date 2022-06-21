import { render, screen } from '@testing-library/react'

import { data } from '@/mocks'

import { Footer } from '.'

describe('<Footer />', () => {
  beforeEach(() => {
    render(<Footer />)
  })

  it('should matches snapshot', () => {
    expect(screen.getByTestId('footer')).toMatchSnapshot()
  })

  it('should render correct footer text', () => {
    expect(screen.getByText(data.t.footer)).toBeInTheDocument()
  })
})
