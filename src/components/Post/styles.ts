import tw, { styled } from 'twin.macro'

export const Wrapper = styled.main`
  ${tw``}
`

export const Header = styled.header`
  ${tw`flex items-center justify-center w-full h-screen`}
`

export const Cover = styled.div`
  z-index: -10;
`

export const Overlay = styled.div`
  ${tw`absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent`}
`

export const Article = styled.article`
  ${tw`mx-auto -mt-32 prose xl:prose-xl text-primary-50`}
`
