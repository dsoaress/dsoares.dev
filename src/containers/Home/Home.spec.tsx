import { render } from '@testing-library/react'

import { projects } from '@/mocks'

import { Home } from '.'

describe('<Home />', () => {
  it('should matches snapshot', () => {
    const { container } = render(<Home avatarBlurDataURL="" projects={projects} />)
    expect(container).toMatchSnapshot()
  })
})
