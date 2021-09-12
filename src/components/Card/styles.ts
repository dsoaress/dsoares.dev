import tw, { styled } from 'twin.macro'

export const Wrapper = styled.div`
  ${tw`relative transition-all duration-300 border rounded-md border-neutral-800 hover:bg-neutral-800 hover:shadow-2xl hover:transform hover:-translate-y-1`}
`

export const ImageCover = styled.div`
  ${tw`relative h-64 overflow-hidden rounded-t-md`}
`

export const Container = styled.main`
  ${tw`grid gap-4 p-6`}
`
