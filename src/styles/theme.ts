import { DefaultTheme } from 'styled-components'

import colorsData from '@/content/colors.json'

export const theme: DefaultTheme = {
  colors: {
    primary: colorsData.primary,
    text: colorsData.text,
    background: colorsData.background
  },
  fontFamily: '"Ubuntu", sans-serif',
  fontSizes: {
    sm: '0.85rem',
    md: '1rem',
    lg: '2.4rem',
    xl: '3rem'
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px'
  }
}
