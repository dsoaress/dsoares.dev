import { render, screen } from '@testing-library/react'

import { data } from '@/mocks'

import { Header } from '.'

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
    expect(screen.getByText(data.c.profile.title)).toBeInTheDocument()
  })

  it('should render with correct description', () => {
    expect(screen.getByText(data.t.description)).toBeInTheDocument()
  })

  it('should render resume button', () => {
    expect(screen.getByText(data.t.resume.title)).toBeInTheDocument()
  })
})
