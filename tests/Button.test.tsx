import Button from '@/components/Button'
import { render, screen } from '@/lib/testUtils'

describe('<Button />', () => {
  it('Renders with children', () => {
    render(<Button>Children</Button>)

    expect(screen.getByText('Children')).toBeInTheDocument()
    expect(screen.getByText('Children')).toMatchSnapshot()
  })
})
