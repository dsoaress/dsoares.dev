import Layout from '@/components/Layout'
import { render, screen } from '@/lib/testUtils'

describe('<Layout />', () => {
  it('Renders with children', () => {
    render(<Layout>Children</Layout>)

    expect(screen.getByText('Children')).toBeInTheDocument()
    expect(screen.getByText('Children')).toMatchSnapshot()
  })
})
