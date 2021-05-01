import { connectToDatabase } from '@/lib/mongodb'

export async function getInitialData() {
  const { db } = await connectToDatabase()
  const { USER_EMAIL } = process.env
  const res = await db.collection('users').findOne({ email: USER_EMAIL })
  const data = JSON.parse(JSON.stringify(res))
  return data
}
