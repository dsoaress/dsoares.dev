import { render } from '@testing-library/react'

import { Logo } from '@/components'

import Home from './page'

jest.mock('@/components', () => ({
  Logo: jest.fn(() => <div data-testid="logo" />),
  HomeContainer: jest.fn(({ children }) => <div data-testid="home-container">{children}</div>),
  Header: jest.fn(() => <header data-testid="header" />),
  Social: jest.fn(() => <div data-testid="social" />),
  About: jest.fn(() => <section data-testid="about" />),
  Footer: jest.fn(() => <footer data-testid="footer" />)
}))

describe('Home', () => {
  it('renders the Logo component with correct size and class', () => {
    const { getByTestId } = render(<Home />)
    const logo = getByTestId('logo')
    expect(logo).toBeInTheDocument()
    expect(Logo).toHaveBeenCalledWith(
      expect.objectContaining({
        size: 36,
        className: 'mx-auto mb-12 text-primary-300'
      }),
      {}
    )
  })

  it('renders the HomeContainer component with its children', () => {
    const { getByTestId } = render(<Home />)
    const homeContainer = getByTestId('home-container')
    expect(homeContainer).toBeInTheDocument()
    expect(getByTestId('header')).toBeInTheDocument()
    expect(getByTestId('social')).toBeInTheDocument()
    expect(getByTestId('about')).toBeInTheDocument()
  })

  it('renders the Footer component', () => {
    const { getByTestId } = render(<Home />)
    const footer = getByTestId('footer')
    expect(footer).toBeInTheDocument()
  })
})
