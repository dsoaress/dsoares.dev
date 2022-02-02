export const en = {
  nav: [
    { label: 'Home', url: '/' },
    { label: 'Projects', url: 'projects' },
    { label: 'Posts', url: 'posts' }
  ],
  resume: {
    title: 'Resume',
    file: '/assets/resume-en.pdf'
  },
  projects: {
    title: 'Projects',
    description: 'Some of my projects on GitHub.'
  },
  posts: {
    title: 'Posts',
    description:
      'Here are the most recent posts. I often write about web technologies and related topics.',
    readingTime: (time: number) => `minute${time > 1 && 's'} of reading`,
    readMore: 'read more'
  },
  errors: {
    notFound: 'Not found',
    internalError: 'Internal error',
    buttonLabel: 'Back to home'
  },
  footer: 'Made with 💚 and'
}
