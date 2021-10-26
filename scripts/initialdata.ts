import dotenv from 'dotenv'

import { initialdata } from '@/services/initialdata'

dotenv.config({
  path: './.env'
})

initialdata().catch(error => console.log(error))
