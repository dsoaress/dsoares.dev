import tw, { styled } from 'twin.macro'

export const Wrapper = styled.div`
  ${tw`absolute flex items-end justify-center w-full h-screen pb-24`}
`

export const Content2 = styled.div`
  ${tw`z-10 grid gap-8 px-8 text-center transform translate-y-80`}

  svg {
    ${tw`mx-auto`}
  }
`

export const Content = styled.div`
  ${tw`z-10 grid gap-8 px-8 text-center`}

  svg {
    ${tw`mx-auto`}
  }
`

export const Resume = styled.nav`
  ${tw`flex justify-center`}
`

export const Avatar = styled.div`
  ${tw`relative h-screen`}
`

export const Overlay = styled.div`
  ${tw`absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent`}
`
