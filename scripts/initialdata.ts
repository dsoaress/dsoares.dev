import dotenv from 'dotenv'

import { initialdata } from '../src/services/initialdata'

dotenv.config({
  path: './.env'
})

initialdata().catch(error => console.log(error))
