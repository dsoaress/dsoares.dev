import { GetStaticProps } from 'next'
import useSWR from 'swr'

import { Layout } from '@/components/Layout'
import { Posts } from '@/components/Posts'
import { Profile } from '@/components/Profile'
import { Projects } from '@/components/Projects'
import { getDevTo, postsQuery } from '@/lib/getDevTo'
import { getGitHubProjects, projectsQuery } from '@/lib/getGitHubProjects'
import { Post } from '@/types/post'
import { Project } from '@/types/project'

type IndexPageProps = {
  projects: Project[]
  posts: Post[]
}

export default function IndexPage(props: IndexPageProps) {
  const { data: projects } = useSWR(projectsQuery, { initialData: props.projects })
  const { data: posts } = useSWR(postsQuery, { initialData: props.posts })

  return (
    <Layout>
      <Profile />
      <Projects projects={projects} />
      <Posts posts={posts} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getGitHubProjects()
  const posts = await getDevTo()

  return { props: { projects, posts }, revalidate: 1 }
}
