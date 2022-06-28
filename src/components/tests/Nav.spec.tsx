import { render } from '@testing-library/react'

import { Nav } from '../Nav'

describe('<Nav />', () => {
  it('should render correctly', () => {
    const { container } = render(<Nav />)
    expect(container).toMatchSnapshot()
  })

  it('should render selected locale with active prop', () => {
    const classToTest = 'text-primary-300'
    const { getByRole } = render(<Nav />)

    expect(getByRole('link', { name: '[en]' })).toHaveClass(classToTest)
    expect(getByRole('link', { name: '[es]' })).not.toHaveClass(classToTest)
    expect(getByRole('link', { name: '[pt]' })).not.toHaveClass(classToTest)
  })
})
