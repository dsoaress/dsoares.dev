import { render, screen } from '@testing-library/react'

import { Header } from '.'

const profile = { title: 'John Doe' }
const description = 'John Doe is a software engineer.'
const resume = { title: 'resume', file: '' }

jest.mock(
  'next/image',
  () =>
    function Image({ src, alt }: { src: string; alt: string }) {
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={src} alt={alt} />
    }
)

jest.mock('@/components/Skills', () => ({
  Skills: () => <div data-testid="skills" />
}))

jest.mock('next/router', () => ({
  useRouter: () => ({ locale: 'en' })
}))

jest.mock('@/hooks/useData', () => ({
  useData: () => ({
    locale: 'en',
    c: {
      profile: { title: profile.title },
      showResume: true
    },
    t: {
      description,
      resume: { title: resume.title, file: resume.file }
    }
  })
}))

describe('<Header />', () => {
  let element: HTMLElement | null = null

  beforeEach(() => {
    const { container } = render(<Header avatarBlurDataURL="" />)
    element = container
  })

  it('should matches snapshot', () => {
    expect(element).toMatchSnapshot()
  })

  it('should render with correct title', () => {
    expect(screen.getByText(profile.title)).toBeInTheDocument()
  })

  it('should render with correct description', () => {
    expect(screen.getByText(description)).toBeInTheDocument()
  })

  it('should render with correct avatar', () => {
    expect(screen.getByAltText(profile.title)).toBeInTheDocument()
  })

  it('should render resume button', () => {
    expect(screen.getByText(resume.title)).toBeInTheDocument()
  })

  it('should render with skills component in the right place', () => {
    expect(screen.getByTestId('skills')).toBeInTheDocument()
  })
})
