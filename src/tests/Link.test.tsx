import { Link } from '@/components/Link'
import { render, screen } from '@/lib/testUtils'

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
