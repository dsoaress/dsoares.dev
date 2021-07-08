import { Heading } from '@/components/Heading'
import { render, screen } from '@/lib/testUtils'

describe('<Button />', () => {
  it('Renders with children', () => {
    render(<Heading>Children</Heading>)

    expect(screen.getByText('Children')).toBeInTheDocument()
    expect(screen.getByText('Children')).toMatchSnapshot()
  })
})
