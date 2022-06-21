export default jest.mock('next/router', () => ({
  useRouter: () => ({ locale: 'en' })
}))
