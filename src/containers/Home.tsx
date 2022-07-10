import { Container, Footer, Header, Projects } from '@/components'
import type { Project } from '@/types'

type HomeProps = {
  avatarBlurDataURL: string
  projects: Project[]
}

export function Home({ avatarBlurDataURL, projects }: HomeProps) {
  const hasContent = !!projects.length

  return (
    <>
      <Header avatarBlurDataURL={avatarBlurDataURL} hasContent={hasContent} />

      {hasContent && (
        <Container>
          <Projects projects={projects} />
          <Footer />
        </Container>
      )}
    </>
  )
}
