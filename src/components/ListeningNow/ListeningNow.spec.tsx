import { render } from '@testing-library/react'

import { ListeningNow } from '.'

describe('<ListeningNow />', () => {
  it('should render with data', () => {
    const { container } = render(<ListeningNow />)
    expect(container).toMatchSnapshot()
  })
})
