import { GetStaticProps } from 'next'
import useSWR from 'swr'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Layout } from '@/components/Layout'
import { Posts } from '@/components/Posts'
import { Projects } from '@/components/Projects'
import { fetcher } from '@/lib/fetcher'
import { getPosts } from '@/lib/getPosts'
import { getProjects } from '@/lib/getProjects'
import { Post } from '@/types/post'
import { Project } from '@/types/project'

type IndexPageProps = {
  projects: Project[]
  posts: Post[]
}

export default function IndexPage(props: IndexPageProps) {
  const { data: projects } = useSWR(getProjects, { initialData: props.projects })
  const { data: posts } = useSWR(getPosts, { initialData: props.posts })

  return (
    <>
      <Header />
      <Layout>
        <Projects projects={projects} />
        <Posts posts={posts} />
        <Footer />
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await fetcher(getProjects)
  const posts = await fetcher(getPosts)

  return { props: { projects, posts }, revalidate: 1 }
}
