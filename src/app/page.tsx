import { About } from '@/components/about'
import { EmailList } from '@/components/email-list'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { HomeContainer } from '@/components/home-container'
import { Location } from '@/components/location'
import { Logo } from '@/components/logo'
import { Social } from '@/components/social'

export default function Home() {
  return (
    <main>
      <Logo size={36} className="mx-auto mb-12 text-primary-300" />
      <HomeContainer>
        <Header />
        <Social />
        <About />
        <Location />
        <EmailList />
      </HomeContainer>
      <Footer />
    </main>
  )
}
