import { extendTheme } from '@chakra-ui/react'
import styles from './styles'

const overrides = {
  fonts: {
    body: 'Rubik, sans-serif',
    head: 'Rubik Mono One, sans-serif'
  },
  styles
}

export default extendTheme(overrides)
