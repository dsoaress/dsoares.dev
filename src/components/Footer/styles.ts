import tw, { styled } from 'twin.macro'

export const Wrapper = styled.div`
  ${tw`
    flex
    flex-col
    justify-center
    my-12
  `}

  p {
    ${tw`
      text-center
      mt-6
    `}
  }
`
