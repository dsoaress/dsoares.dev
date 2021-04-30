import { getSession } from 'next-auth/client'
import nc from 'next-connect'
import multer from 'multer'
import { v2 as cloudinary } from 'cloudinary'

import { connectToDatabase } from '@/lib/mongodb'

const upload = multer({ dest: '/tmp' })

export const config = {
  api: { bodyParser: false }
}

const {
  hostname: cloud_name,
  username: api_key,
  password: api_secret
} = new URL(process.env.CLOUDINARY_URI)

cloudinary.config({
  cloud_name,
  api_key,
  api_secret
})

const handler = nc()
  .use(upload.single('image'))
  .patch(async (req, res) => {
    const session = await getSession({ req })
    const { db } = await connectToDatabase()
    const userEmail = process.env.USER_EMAIL
    const { description, footer, greeting } = req.body

    if (session) {
      const user = await db.collection('users').findOne({ email: userEmail })

      let { image } = user

      if (req.file) {
        const { secure_url } = await cloudinary.uploader.upload(req.file.path)
        image = secure_url
      }

      await db
        .collection('users')
        .updateOne(
          { email: userEmail },
          { $set: { description, footer, greeting, image } }
        )
      res.end()
    } else {
      res.status(401)
    }
  })

export default handler
