import { Container, Footer, Header, Projects } from '@/components'
import type { Project } from '@/types'

type HomeProps = {
  projects: Project[]
}

export function Home({ projects }: HomeProps) {
  const hasContent = !!projects.length

  return (
    <>
      <Header hasContent={hasContent} />

      {hasContent && (
        <Container>
          <Projects projects={projects} />
          <Footer />
        </Container>
      )}
    </>
  )
}
