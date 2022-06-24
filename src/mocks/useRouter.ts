export default jest.mock('next/router', () => ({
  useRouter: () => ({
    locale: 'en',
    locales: ['en', 'es', 'pt'],
    asPath: '/'
  })
}))
