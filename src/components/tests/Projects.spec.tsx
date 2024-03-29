import { render } from '@testing-library/react'

import { projects } from '@/mocks'

import { Projects } from '../Projects'

describe('<Projects />', () => {
  it('should render correctly', () => {
    const { container } = render(<Projects projects={projects} />)
    expect(container).toMatchSnapshot()
  })
})
