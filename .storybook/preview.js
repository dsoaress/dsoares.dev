import * as nextImage from 'next/image'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from '../styles/globals'
import { theme } from '../styles/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: props => {
    return <img {...props} />
  }
})
