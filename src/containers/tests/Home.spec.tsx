import { render } from '@testing-library/react'

import { projects } from '@/mocks'

import { Home } from '../Home'

describe('<Home />', () => {
  it('should matches snapshot', () => {
    const { container } = render(<Home projects={projects} />)
    expect(container).toMatchSnapshot()
  })
})
