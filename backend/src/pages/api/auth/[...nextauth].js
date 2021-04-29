import NextAuth from 'next-auth'
import { GitHub } from 'next-auth/providers'

const { GITHUB_ID, GITHUB_SECRET, MONGODB_URI } = process.env

export default NextAuth({
  providers: [
    GitHub({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET
    })
  ],
  pages: {
    signIn: '/admin'
  },
  database: MONGODB_URI
})
