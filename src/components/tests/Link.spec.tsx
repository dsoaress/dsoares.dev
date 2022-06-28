import { render, screen } from '@testing-library/react'

import { Link } from '../Link'

describe('<Link />', () => {
  it('Renders with children', () => {
    render(<Link href="#">Children</Link>)

    expect(screen.getByText('Children')).toBeInTheDocument()
    expect(screen.getByText('Children')).toMatchSnapshot()
  })

  it('Renders with active className', () => {
    render(
      <Link href="#" active>
        Children
      </Link>
    )

    expect(screen.getByText('Children')).toMatchSnapshot()
  })
})
