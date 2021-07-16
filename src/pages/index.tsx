import { GetStaticProps } from 'next'
import useSWR from 'swr'

import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Posts, PostType } from '@/components/Posts'
import { Projects } from '@/components/Projects'
import { fetcher } from '@/lib/fetcher'
import { getPosts } from '@/lib/getPosts'

type IndexPageProps = {
  posts: PostType[]
}

export default function IndexPage(props: IndexPageProps) {
  // const { data: posts } = useSWR(getPosts, { initialData: props.posts })

  return (
    <>
      <Header />
      {/* <Container>
        <Projects />
        <Posts posts={props.posts} />
        <Footer />
      </Container> */}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetcher(getPosts)

  return { props: { posts }, revalidate: 1 }
}
