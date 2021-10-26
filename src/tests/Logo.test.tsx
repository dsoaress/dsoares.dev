import { Logo } from '@/components/Logo'
import { render, screen } from '@/lib/testUtils'

describe('<Logo />', () => {
  it('Renders logo', () => {
    render(<Logo height={80} width={80} />)

    expect(screen.getByTestId('logo')).toBeInTheDocument()
    expect(screen.getByTestId('logo')).toMatchSnapshot()
  })
})
