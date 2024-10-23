import { About, Footer, Header, HomeContainer, Logo, Social } from '@/components'

export default function Home(): JSX.Element {
  return (
    <main>
      <Logo size={36} className="mx-auto mb-12 text-primary-300" />
      <HomeContainer>
        <Header />
        <Social />
        <About />
      </HomeContainer>
      <Footer />
    </main>
  )
}
