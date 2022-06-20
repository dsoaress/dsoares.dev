import type { GetStaticProps } from 'next'

import { Home } from '@/containers/Home'
import { getAllProjects, getAvatarBlurDataURL } from '@/services/api'

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
