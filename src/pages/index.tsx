import { GetStaticProps } from 'next'

import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Projects } from '@/components/Projects'
import { getAllProjects } from '@/services/api'
import type { Project } from '@/types/project'

type IndexPageProps = {
  projects: Project[]
}

export default function IndexPage({ projects }: IndexPageProps) {
  return (
    <>
      <Header />
      <Container>
        <Projects projects={projects} />
        <Footer />
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getAllProjects()

  return {
    props: {
      projects
    }
  }
}
