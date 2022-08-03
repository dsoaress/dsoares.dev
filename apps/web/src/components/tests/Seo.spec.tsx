import { render } from '@testing-library/react'

import { Seo } from '../Seo'

describe('<Seo />', () => {
  it('should matches snapshot', () => {
    const { container } = render(<Seo />)

    expect(container).toBeInTheDocument()
  })
})
