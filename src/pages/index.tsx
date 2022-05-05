import { GetStaticProps } from 'next'

import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Projects } from '@/components/Projects'
import { getAllProjects, getAvatarBlurDataURL } from '@/services/api'
import type { Project } from '@/types'

type IndexPageProps = {
  avatarBlurDataURL: string
  projects: Project[]
}

export default function IndexPage({ avatarBlurDataURL, projects }: IndexPageProps) {
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

export const getStaticProps: GetStaticProps = async () => {
  const avatarBlurDataURL = await getAvatarBlurDataURL()
  const projects = await getAllProjects()

  return {
    props: {
      avatarBlurDataURL,
      projects
    }
  }
}
