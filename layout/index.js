import { useSession } from 'next-auth/client'
import SEO from './seo'
import Header from './header'
import Footer from './footer'
import LoginBox from '@/components/login-box'

export function Main({ children }) {
  return (
    <>
      <SEO />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export function Dash({ children }) {
  const [session, loading] = useSession()

  if (loading) return null

  if (!loading && !session) return <LoginBox accessDenied />

  return (
    <>
      <SEO />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
