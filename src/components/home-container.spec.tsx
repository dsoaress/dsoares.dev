import { render } from '@testing-library/react'

import { HomeContainer } from './home-container'

describe('HomeContainer', () => {
  it('renders with default styles', () => {
    const { container } = render(<HomeContainer>Test content</HomeContainer>)
    expect(container.firstChild).toHaveClass(
      'mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4'
    )
    expect(container).toHaveTextContent('Test content')
  })

  it('passes additional props to the container', () => {
    const { container } = render(
      <HomeContainer data-testid="home-container" aria-label="Home">
        Test content
      </HomeContainer>
    )
    expect(container.firstChild).toHaveAttribute('data-testid', 'home-container')
    expect(container.firstChild).toHaveAttribute('aria-label', 'Home')
  })
})
