import { GetStaticProps } from 'next'

import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Posts } from '@/components/Posts'
import { Projects } from '@/components/Projects'
import { getAllPosts } from '@/queries/getAllPosts'
import { getAllProjects } from '@/queries/getAllProjects'

type Post = {
  id: string
  slug: string
  title: string
  description: string
  cover: string
  date: string
  readingTime: number
  content?: string
}

type Project = {
  title: string
  description: string
  tags: string
  repositoryUrl: string
  repo: string
  stars: number
  cover: string
}

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
