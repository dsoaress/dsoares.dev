import { GetStaticProps } from 'next'

import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Posts } from '@/components/Posts'
import { Projects } from '@/components/Projects'
import { getAllPosts } from '@/lib/getAllPosts'
import { getAllProjects } from '@/lib/getAllProjects'
import type { Post } from '@/types/post'
import type { Project } from '@/types/project'

type IndexPageProps = {
  posts: Post[]
  projects: Project[]
}

export default function IndexPage({ posts, projects }: IndexPageProps) {
  return (
    <>
      <Header />
      <Container>
        <Projects projects={projects} />
        <Posts posts={posts} />
        <Footer />
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ctx => {
  const projects = await getAllProjects()
  const posts = await getAllPosts(ctx)

  return {
    props: {
      posts,
      projects
    }
  }
}
