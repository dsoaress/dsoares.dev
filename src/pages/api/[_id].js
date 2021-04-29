import { ObjectId } from 'mongodb'
import { getSession } from 'next-auth/client'

import { connectToDatabase } from '@/lib/mongodb'

export default async (req, res) => {
  const session = await getSession({ req })
  const { db } = await connectToDatabase()

  if (session) {
    const _id = ObjectId(req.query._id)

    if (req.method === 'GET') {
      const user = await db.collection('users').findOne({ _id })

      res.json(user)
    }

    if (req.method === 'POST') {
      const { task } = req.body

      await db
        .collection('users')
        .updateOne(
          { _id },
          { $push: { tasks: { _id: ObjectId(), name: task.name } } }
        )

      res.end()
    }

    if (req.method === 'PATCH') {
      const { task } = req.body

      await db
        .collection('users')
        .updateOne({ _id }, { $pull: { tasks: { _id: ObjectId(task._id) } } })

      res.end()
    }
  } else {
    res.status(401)
  }
  res.end()
}
