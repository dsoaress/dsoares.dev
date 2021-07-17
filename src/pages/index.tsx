import { GetStaticProps } from 'next'

import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Posts, PostType } from '@/components/Posts'
import { Projects } from '@/components/Projects'
import profileData from '@/content/profile.json'
import { fetcher } from '@/lib/fetcher'

type IndexPageProps = {
  posts: PostType[]
}

export default function IndexPage({ posts }: IndexPageProps) {
  return (
    <>
      <Header />
      {/* <Container>
        <Projects />
        <Posts posts={posts} />
        <Footer />
      </Container> */}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const getPosts = `https://dev.to/api/articles?username=${profileData.devToProfile}`
  const posts = await fetcher(getPosts)

  return { props: { posts }, revalidate: 1 }
}
