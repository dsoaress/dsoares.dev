import { getSession } from 'next-auth/client'

import { connectToDatabase } from '@/lib/mongodb'

export default async (req, res) => {
  const session = await getSession({ req })
  const { db } = await connectToDatabase()
  const userEmail = process.env.USER_EMAIL
  const { footer, profile } = req.body

  if (session) {
    if (req.method === 'PATCH') {
      await db.collection('users').updateOne(
        { email: userEmail },
        {
          $set: {
            footer,
            profile
          }
        }
      )
      res.end()
    }
  } else {
    res.status(401)
  }
}
