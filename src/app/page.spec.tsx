import { render } from '@testing-library/react'

import Home from './page'

vi.mock('@/components', () => ({
  Logo: vi.fn(props => <div data-testid="logo" {...props} />),
  HomeContainer: vi.fn(({ children }) => <div data-testid="home-container">{children}</div>),
  Header: vi.fn(() => <header data-testid="header" />),
  Social: vi.fn(() => <div data-testid="social" />),
  About: vi.fn(() => <section data-testid="about" />),
  Footer: vi.fn(() => <footer data-testid="footer" />)
}))

describe('Home', () => {
  it('renders the Logo component with correct size and class', () => {
    const { getByTestId } = render(<Home />)
    const logo = getByTestId('logo')
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveClass('mx-auto mb-12 text-primary-300')
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
