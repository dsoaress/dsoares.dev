import { extendTheme } from '@chakra-ui/react'
import styles from './styles'

const overrides = {
  colors: {
    background: '#1a1d23',
    default: '#dadada',
    highlight: '#bc2d57',
    hover: '#911c3e'
  },
  fonts: {
    body: 'Rubik, sans-serif',
    head: 'Rubik Mono One, sans-serif'
  },
  styles
}

export default extendTheme(overrides)
