import type { GetStaticProps } from 'next'

import { Home } from '@/containers'
import { getAllProjects } from '@/services/getAllProjects'

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getAllProjects()

  return {
    props: {
      projects
    }
  }
}

export default Home
