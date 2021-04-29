import { connectToDatabase } from '@/lib/mongodb'

export default async (req, res) => {
  const { db } = await connectToDatabase()
  const userEmail = process.env.USER_EMAIL

  const user = await db.collection('users').findOne({ email: userEmail })

  res.json(user)
}
