import tw, { styled } from 'twin.macro'

export const Wrapper = styled.main`
  ${tw`
    fixed
    inset-0

    flex
    items-center
    justify-center
  `}
`

export const Content = styled.div`
  ${tw`text-center`}

  p {
    ${tw`mb-8`}
  }
`
