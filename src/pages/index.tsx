import { GetStaticProps } from 'next'

import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Projects } from '@/components/Projects'
import { getAllProjects, getAvatar } from '@/services/api'
import type { Project } from '@/types/project'
import type { TransformadImg } from '@/types/transformadImg'

type IndexPageProps = {
  avatar: TransformadImg
  projects: Project[]
}

export default function IndexPage({ avatar, projects }: IndexPageProps) {
  return (
    <>
      <Header avatar={avatar} />
      <Container>
        <Projects projects={projects} />
        <Footer />
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const avatar = await getAvatar()
  const projects = await getAllProjects()

  return {
    props: {
      avatar,
      projects
    }
  }
}
