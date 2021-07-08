import { Text } from '@/components/Text'
import { render, screen } from '@/lib/testUtils'

describe('<Text />', () => {
  it('Renders with children', () => {
    render(<Text>Children</Text>)

    expect(screen.getByText('Children')).toBeInTheDocument()
    expect(screen.getByText('Children')).toMatchSnapshot()
  })
})
