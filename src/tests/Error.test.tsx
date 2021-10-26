import { Error } from '@/components/Error'
import { render, screen } from '@/lib/testUtils'

describe('<Error />', () => {
  it('Renders with status code and error message', () => {
    render(<Error statusCode={404} errorMessage="Error message" />)

    expect(screen.getByText('404')).toBeInTheDocument()
    expect(screen.getByText('404')).toMatchSnapshot()
    expect(screen.getByText('Error message')).toBeInTheDocument()
    expect(screen.getByText('Error message')).toMatchSnapshot()
  })
})
