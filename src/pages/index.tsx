// import { GetStaticProps } from 'next'

// import { Container } from '@/components/Container'
// import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
// import { Posts } from '@/components/Posts'
// import { Projects } from '@/components/Projects'
// import { initialdata } from '@/services/initialdata'
// import { getAllPosts, getAllProjects } from '@/services/queries'
// import { PostType } from '@/types/post'
// import { ProjectType } from '@/types/project'

// type IndexPageProps = {
//   posts: PostType[]
//   projects: ProjectType[]
// }

// export default function IndexPage({ posts, projects }: IndexPageProps) {
export default function IndexPage() {
  return (
    <>
      <Header showResume={false} />
      {/* <Container>
        <Projects projects={projects} />
        <Posts posts={posts} />
        <Footer />
      </Container> */}
    </>
  )
}

// export const getStaticProps: GetStaticProps = async ctx => {
//   await initialdata()

//   const projects = await getAllProjects(ctx)
//   const posts = await getAllPosts(ctx)

//   return {
//     props: {
//       posts,
//       projects
//     },
//     revalidate: 1
//   }
// }
