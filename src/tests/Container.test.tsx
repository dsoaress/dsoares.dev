import { Container } from '@/components/Container'
import { render, screen } from '@/lib/testUtils'

describe('<Container />', () => {
  it('Renders with children', () => {
    render(<Container>Children</Container>)

    expect(screen.getByText('Children')).toBeInTheDocument()
    expect(screen.getByText('Children')).toMatchSnapshot()
  })
})
