import tw, { styled } from 'twin.macro'

export const Footer = styled.footer`
  ${tw`flex self-end justify-between `}

  span {
    p {
      ${tw`flex items-center `}
    }

    svg {
      ${tw`mr-1`};
    }
  }
`
