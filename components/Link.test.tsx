import { render, screen } from '@/lib/testUtils'

import Link from './Link'

describe('<Link />', () => {
  it('Renders with children', () => {
    render(<Link href="#">Children</Link>)

    expect(screen.getByText('Children')).toBeInTheDocument()
  })
})
