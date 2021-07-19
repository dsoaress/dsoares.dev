import tw, { styled } from 'twin.macro'

export const Wrapper = styled.div`
  ${tw`
    absolute
    flex
    items-end
    justify-center
    pb-24
    w-full
    h-screen
  `}
`

export const Content = styled.div`
  ${tw`
    grid
    gap-8
    px-8
    text-center
    z-10
  `}

  svg {
    ${tw`mx-auto`}
  }
`

export const Resume = styled.nav`
  ${tw`
    flex
    justify-center
  `}
`

export const Avatar = styled.div`
  ${tw`
    relative
    h-screen
  `}
`

export const Overlay = styled.div`
  ${tw`
    absolute
    inset-0
    bg-gradient-to-t
    from-neutral-900
    to-transparent
  `}
`
