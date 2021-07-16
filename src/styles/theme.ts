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
    lg: '1.2rem',
    xl: '2.4rem',
    xxl: '3rem'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '0.8rem',
    lg: '1rem',
    xl: '1.5rem',
    xxl: '2rem'
  },
  rounded: '0.35rem'
}
