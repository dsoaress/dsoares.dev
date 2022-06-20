import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Projects } from '@/components/Projects'
import type { Project } from '@/types'

type HomeProps = {
  avatarBlurDataURL: string
  projects: Project[]
}

export function Home({ avatarBlurDataURL, projects }: HomeProps) {
  return (
    <>
      <Header avatarBlurDataURL={avatarBlurDataURL} />
      <Container>
        <Projects projects={projects} />
        <Footer />
      </Container>
    </>
  )
}
