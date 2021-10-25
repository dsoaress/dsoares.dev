import dotenv from 'dotenv'

import { initialData } from '@/services/initialdata'

dotenv.config({
  path: './.env'
})

initialData().catch(error => console.log(error))
