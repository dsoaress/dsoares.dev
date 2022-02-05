import { render, screen } from '@testing-library/react'

import { Header } from '@/components/Header'

const profile = {
  title: 'John Doe',
  description: {
    en: 'John Doe is a software engineer.'
  },
  avatar: 'https://via.placeholder.com/150'
}

const resume = {
  title: 'resume',
  file: ''
}

jest.mock(
  'next/image',
  () =>
    function Image({ src, alt }: { src: string; alt: string }) {
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={src} alt={alt} />
    }
)

jest.mock('@/components/Social', () => {
  return {
    Social: () => {
      return <div data-testid="social" />
    }
  }
})

jest.mock('@/hooks/useData', () => {
  return {
    useData() {
      return {
        locale: 'en',
        c: {
          profile: {
            title: profile.title,
            description: {
              en: profile.description.en
            },
            avatar: profile.avatar
          },
          showResume: true
        },
        t: {
          resume: {
            title: resume.title,
            file: resume.file
          }
        }
      }
    }
  }
})

describe('<Header />', () => {
  let element: HTMLElement | null = null

  beforeEach(() => {
    const { container } = render(<Header />)
    element = container
  })

  it('should matches snapshot', () => {
    expect(element).toMatchSnapshot()
  })

  it('should render with correct title', () => {
    expect(screen.getByText(profile.title)).toBeInTheDocument()
  })

  it('should render with correct description', () => {
    expect(screen.getByText(profile.description.en)).toBeInTheDocument()
  })

  it('should render with correct avatar', () => {
    expect(screen.getByAltText(profile.title)).toBeInTheDocument()
  })

  it('should render resume button', () => {
    expect(screen.getByText(resume.title)).toBeInTheDocument()
  })

  it('should render with social component in the right place', () => {
    expect(screen.getByTestId('social')).toBeInTheDocument()
  })
})
