import { render } from '@testing-library/react'

import { Icon } from '.'

describe('<Icon />', () => {
  it('should render Email icon', () => {
    const { container } = render(<Icon variant="Email" />)
    expect(container).toMatchSnapshot()
  })

  it('should render GitHub icon', () => {
    const { container } = render(<Icon variant="GitHub" />)
    expect(container).toMatchSnapshot()
  })

  it('should render LinkedIn icon', () => {
    const { container } = render(<Icon variant="LinkedIn" />)
    expect(container).toMatchSnapshot()
  })

  it('should render Dev icon', () => {
    const { container } = render(<Icon variant="Dev" />)
    expect(container).toMatchSnapshot()
  })

  it('should render Instagram icon', () => {
    const { container } = render(<Icon variant="Instagram" />)
    expect(container).toMatchSnapshot()
  })

  it('should render WhatsApp icon', () => {
    const { container } = render(<Icon variant="WhatsApp" />)
    expect(container).toMatchSnapshot()
  })

  it('should render React icon', () => {
    const { container } = render(<Icon variant="React" />)
    expect(container).toMatchSnapshot()
  })

  it('should render Next.js icon', () => {
    const { container } = render(<Icon variant="Next.js" />)
    expect(container).toMatchSnapshot()
  })

  it('should render JavaScript icon', () => {
    const { container } = render(<Icon variant="JavaScript" />)
    expect(container).toMatchSnapshot()
  })

  it('should render TypeScript icon', () => {
    const { container } = render(<Icon variant="TypeScript" />)
    expect(container).toMatchSnapshot()
  })

  it('should render Jest icon', () => {
    const { container } = render(<Icon variant="Jest" />)
    expect(container).toMatchSnapshot()
  })

  it('should render Nest.js icon', () => {
    const { container } = render(<Icon variant="Nest.js" />)
    expect(container).toMatchSnapshot()
  })

  it('should render Expo icon', () => {
    const { container } = render(<Icon variant="Expo" />)
    expect(container).toMatchSnapshot()
  })

  it('should render Node icon', () => {
    const { container } = render(<Icon variant="Node" />)
    expect(container).toMatchSnapshot()
  })

  it('should render Storybook icon', () => {
    const { container } = render(<Icon variant="Storybook" />)
    expect(container).toMatchSnapshot()
  })

  it('should render Prisma icon', () => {
    const { container } = render(<Icon variant="Prisma" />)
    expect(container).toMatchSnapshot()
  })

  it('should render GraphQL icon', () => {
    const { container } = render(<Icon variant="GraphQL" />)
    expect(container).toMatchSnapshot()
  })

  it('should render Redis icon', () => {
    const { container } = render(<Icon variant="Redis" />)
    expect(container).toMatchSnapshot()
  })

  it('should render Kafka icon', () => {
    const { container } = render(<Icon variant="Kafka" />)
    expect(container).toMatchSnapshot()
  })
})
