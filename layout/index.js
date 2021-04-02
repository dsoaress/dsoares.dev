import SEO from './seo'
import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <SEO />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
