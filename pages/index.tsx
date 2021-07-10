import { GetStaticProps } from 'next'
import useSWR from 'swr'

import { Layout } from '@/components/Layout'
import { Posts } from '@/components/Posts'
import { Profile } from '@/components/Profile'
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
    <Layout>
      <Profile />
      <Projects projects={projects} />
      <Posts posts={posts} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await fetcher(getProjects)
  const posts = await fetcher(getPosts)

  return { props: { projects, posts }, revalidate: 1 }
}
