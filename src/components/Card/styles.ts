import tw, { styled } from 'twin.macro'

export const Wrapper = styled.div`
  ${tw`
    relative
    transition-all
    duration-300
    border
    border-neutral-800
    rounded-md

    hover:(
      bg-neutral-800
      shadow-2xl
      transform
      -translate-y-1
    )
  `}
`

export const ImageCover = styled.div`
  ${tw`
    relative
    h-64
    rounded-t-md
    overflow-hidden
  `}
`

export const Container = styled.main`
  ${tw`
    grid
    gap-4
    p-6
  `}
`
