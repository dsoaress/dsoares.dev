import { Container, Footer, Header, Projects } from '@/components'
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
