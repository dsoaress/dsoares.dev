import tw, { styled } from 'twin.macro'

type TextProps = {
  faded?: boolean
  size?:
    | 'xs'
    | 'sm'
    | 'base'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl'
}

export const Text = styled.p<TextProps>(({ faded = false, size = 'base' }) => [
  faded && tw`text-neutral-500`,

  size === 'sm' ? tw`leading-4` : tw`leading-7`,

  size === 'xs' && tw`text-xs`,
  size === 'sm' && tw`text-sm`,
  size === 'base' && tw`text-base`,
  size === 'lg' && tw`text-lg`,
  size === 'xl' && tw`text-xl`,
  size === '2xl' && tw`text-2xl`,
  size === '3xl' && tw`text-3xl`,
  size === '4xl' && tw`text-4xl`,
  size === '5xl' && tw`text-5xl`,
  size === '6xl' && tw`text-6xl`,
  size === '7xl' && tw`text-7xl`,
  size === '8xl' && tw`text-8xl`,
  size === '9xl' && tw`text-9xl`,

  tw`font-light`
])
