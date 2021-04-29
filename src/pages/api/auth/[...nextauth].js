import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
  pages: {
    signIn: '/'
  },
  callbacks: {
    session: async (session, user, _sessionToken) => {
      session.user._id = user.id
      return Promise.resolve(session)
    }
  },
  database: process.env.MONGODB_URI
})
