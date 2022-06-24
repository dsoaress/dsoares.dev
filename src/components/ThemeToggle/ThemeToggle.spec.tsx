import { render } from '@testing-library/react'

import { ThemeToggle } from '.'

describe('<ThemeToggle />', () => {
  it('should render correctly', () => {
    const { container } = render(<ThemeToggle />)
    expect(container).toMatchSnapshot()
  })
})
