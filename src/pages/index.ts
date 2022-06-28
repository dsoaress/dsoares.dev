import type { GetStaticProps } from 'next'

import { Home } from '@/containers'
import { getAllProjects, getAvatarBlurDataURL } from '@/services'

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
