import { extendTheme } from '@chakra-ui/react'
import styles from './styles'
import Button from './components/button'
import Container from './components/container'

const overrides = {
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false
  },
  colors: {
    background: '#1a1d23',
    default: '#dadada',
    highlight: '#dc2d57',
    hover: '#911c3e'
  },
  fonts: {
    body: 'Rubik, sans-serif',
    head: 'Rubik Mono One, sans-serif'
  },
  components: {
    Button,
    Container
  },
  styles
}

export default extendTheme(overrides)
