import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="max-w-screen-lg px-8 mx-auto">{children}</main>
      <Footer />
    </>
  )
}
