import dotenv from 'dotenv'

import { initialData } from '../src/services/initialData'

dotenv.config({
  path: './.env'
})

initialData().catch(error => console.log(error))
