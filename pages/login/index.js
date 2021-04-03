import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { providers, getSession } from 'next-auth/client'

import { Main } from '@/layout'
import LoginBox from '@/components/login-box'

export default function Login({ providers }) {
  const router = useRouter()
  const { asPath } = router
  const [error, setError] = useState(false)

  if (asPath === '/login/error') {
    useEffect(() => {
      setError(true)
    })
  }
  return (
    <Main>
      <LoginBox providers={providers} error={error} />
    </Main>
  )
}

Login.getInitialProps = async context => {
  const { req, res } = context
  const session = await getSession({ req })

  if (session && res && session.accessToken) {
    res.writeHead(302, {
      Location: '/admin'
    })
    res.end()
    return
  }

  return {
    session: undefined,
    providers: await providers(context)
  }
}
