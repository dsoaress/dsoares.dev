import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'

import Layout from '@/components/Layout'
import Welcome from '@/components/Welcome'

export default function OgImage({ user }) {
  const { asPath } = useRouter()

  const searchParams = new URLSearchParams(asPath.split(/\?/)[1])

  const slug = searchParams.get('slug')
  const locale = searchParams.get('locale')
  const title = searchParams.get('title')

  const { avatar, login, name, siteUrl } = user
  const splittedName = name.split(' ')
  const firstName = splittedName[0]
  const lastName = splittedName[1]

  if (!slug || !locale || !title) {
    return <Welcome firstName={firstName} lastName={lastName} />
  }

  const url = `${siteUrl}${locale === 'en' ? '' : `/${locale}`}/blog/${slug}`
  const github = `github.com/${login}`

  return (
    <Layout
      firstName={firstName}
      lastName={lastName}
      avatar={avatar}
      github={github}
      title={title}
      url={url}
    />
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    `https://api.github.com/users/${process.env.GITHUB_USER}`
  )
  const data = await res.json()

  if (!data) {
    return { notFound: true }
  }

  const user = {
    avatar: data.avatar_url,
    login: data.login,
    name: data.name,
    siteUrl: data.blog
  }

  return { props: { user } }
}
