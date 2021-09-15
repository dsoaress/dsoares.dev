import { GetStaticProps } from 'next'

import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Nav } from '@/components/Nav'
import { Posts } from '@/components/Posts'
import { Projects } from '@/components/Projects'
import { getAllPosts, getAllProjects } from '@/services/queries'
import { PostType } from '@/types/post'
import { ProjectType } from '@/types/project'

type IndexPageProps = {
  posts: PostType[]
  projects: ProjectType[]
}

export default function IndexPage({ posts, projects }: IndexPageProps) {
  return (
    <>
      <Nav />
      <Header />
      {/* <Container>
        <Projects projects={projects} />
        <Posts posts={posts} />
        <Footer />
      </Container> */}
    </>
  )
}

export const getStaticProps: GetStaticProps = async ctx => {
  const projects = await getAllProjects(ctx)
  const posts = await getAllPosts(ctx)

  return {
    props: {
      posts,
      projects
    },
    revalidate: 1
  }
}
