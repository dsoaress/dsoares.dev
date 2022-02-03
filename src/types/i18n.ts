export type I18n = {
  nav: {
    label: string
    url: string
  }[]
  resume: {
    title: string
    file: string
  }
  projects: {
    title: string
    description: string
  }
  posts: {
    title: string
    description: string
    readingTime: (time: number) => string
    readMore: string
  }
  errors: {
    notFound: string
    internalError: string
    buttonLabel: string
  }
  footer: string
}
