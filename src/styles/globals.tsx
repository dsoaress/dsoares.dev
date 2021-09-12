import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const Styles = createGlobalStyle`
  html {
    ${tw`font-sans  text-neutral-50 bg-neutral-900`}
  }
`
export const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Styles />
  </>
)
