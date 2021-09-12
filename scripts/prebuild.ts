import dotenv from 'dotenv'

import { preBuild } from '../src/services/preBuild'

dotenv.config({
  path: './.env'
})

preBuild().catch(error => console.log(error))
