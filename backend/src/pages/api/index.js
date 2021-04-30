import { connectToDatabase } from '@/lib/mongodb'
import NextCors from 'nextjs-cors'

export default async (req, res) => {
  await NextCors(req, res, {
    methods: ['GET', 'HEAD'],
    origin: '*',
    optionsSuccessStatus: 200
  })

  const { db } = await connectToDatabase()
  const userEmail = process.env.USER_EMAIL

  const user = await db.collection('users').findOne({ email: userEmail })

  res.json(user)
}
