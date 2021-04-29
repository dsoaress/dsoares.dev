import { ObjectId } from 'mongodb'
import { getSession } from 'next-auth/client'

import { connectToDatabase } from '@/lib/mongodb'

export default async (req, res) => {
  const session = await getSession({ req })
  const { db } = await connectToDatabase()
  const userEmail = process.env.USER_EMAIL
  const { link } = req.body

  if (req.method === 'GET') {
    const user = await db.collection('users').findOne({ email: userEmail })

    res.json(user)
  }

  if (req.method === 'POST') {
    await db.collection('users').updateOne(
      { email: userEmail },
      {
        $push: {
          links: {
            _id: ObjectId(),
            label: link.label,
            url: link.url
          }
        }
      }
    )

    res.end()
  }

  if (req.method === 'PATCH') {
    if (session) {
      await db.collection('users').updateOne(
        { email: userEmail },
        {
          $pull: {
            links: {
              _id: ObjectId(),
              label: link.label,
              url: link.url
            }
          }
        }
      )

      res.end()
    } else {
      res.status(401)
    }
  }
  res.end()
}
