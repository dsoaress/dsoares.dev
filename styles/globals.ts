import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

import { ThemeType } from './theme'

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  ${normalize}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: ${({ theme }) => theme.fontFamily.fontSans};
    background: ${({ theme }) => theme.colors.neutral[900]};
  }
`
