import 'dotenv/config'
import 'isomorphic-fetch'

import { initialdata } from '@/services/initialdata'

initialdata().catch(error => console.log(error))
