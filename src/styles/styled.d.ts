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
      sm: string
      md: string
      lg: string
      xl: string
      xxl: string
    }
    spacing: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
      xxl: string
    }
    rounded: string
  }
}
