import type { GetStaticProps } from 'next'

import { Home } from '@/containers'
import { getAvatarBlurDataURL } from '@/services/api'
import { getAllProjects } from '@/services/getAllProjects'

export const getStaticProps: GetStaticProps = async () => {
  const avatarBlurDataURL = await getAvatarBlurDataURL()
  const projects = await getAllProjects()

  return {
    props: {
      avatarBlurDataURL,
      projects
    }
  }
}

export default Home
