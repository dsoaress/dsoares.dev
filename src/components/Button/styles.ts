import tw, { styled } from 'twin.macro'

export const Button = styled.button`
  ${tw`
    flex
    items-center
    transition-colors
    duration-300
    px-6
    h-11
    border-0
    rounded-md
    bg-primary-600
    text-neutral-50
    text-sm
    font-medium
    cursor-pointer
    hover:bg-primary-700
    active:bg-primary-800
  `}

  svg {
    ${tw`
      text-lg
      mr-2!
    `}
  }
`
