import tw, { styled } from 'twin.macro'

type HeadingProps = {
  margin?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 16 | 20
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

export const Heading = styled.h1<HeadingProps>(({ margin = 0, size = '5xl' }) => [
  tw`font-bold text-neutral-50`,

  margin === 0 && tw`mb-0`,
  margin === 1 && tw`mb-1`,
  margin === 2 && tw`mb-2`,
  margin === 3 && tw`mb-3`,
  margin === 4 && tw`mb-4`,
  margin === 5 && tw`mb-5`,
  margin === 6 && tw`mb-6`,
  margin === 7 && tw`mb-7`,
  margin === 8 && tw`mb-8`,
  margin === 9 && tw`mb-9`,
  margin === 10 && tw`mb-10`,
  margin === 11 && tw`mb-11`,
  margin === 12 && tw`mb-12`,
  margin === 14 && tw`mb-14`,
  margin === 16 && tw`mb-16`,
  margin === 20 && tw`mb-20`,

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
  size === '9xl' && tw`text-9xl`
])
