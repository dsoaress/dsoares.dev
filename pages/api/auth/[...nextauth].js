import NextAuth from 'next-auth'
import { GitHub } from 'next-auth/providers'
import { Prisma } from 'next-auth/adapters'

import prisma from '@/lib/prisma'

export default NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
  pages: {
    signIn: '/login'
  },
  callbacks: {
    async signIn(user, account, profile) {
      const isAllowedToSignIn = true
      if (isAllowedToSignIn) {
        return true
      } else {
        return `/login/error`
      }
    }
  },
  adapter: Prisma.Adapter({ prisma })
})
