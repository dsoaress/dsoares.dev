import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      text: string
      background: string
    }
    fontFamily: string
    fontSizes: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
    }
    spacing: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
    }
  }
}
