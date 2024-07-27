import {
  About,
  EmailList,
  Footer,
  Header,
  HomeContainer,
  Location,
  Logo,
  Social
} from '@/components'

export default function Home() {
  return (
    <main>
      <Logo size={36} className="mx-auto mb-12 text-primary-300" />
      <HomeContainer>
        <Header />
        <Social />
        <About />
        {/* <Location />
        <EmailList /> */}
      </HomeContainer>
      <Footer />
    </main>
  )
}
