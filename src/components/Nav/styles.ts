import tw, { styled } from 'twin.macro'

export const Wrapper = styled.nav`
  ${tw`
    absolute
    left-0
    right-0
    pt-12
    px-16
    pb-32
    bg-gradient-to-b
    from-neutral-900
    to-transparent
    text-sm!
    z-10
  `}
`
export const NavLinks = styled.ul`
  ${tw`
    flex
    justify-center
    list-none
    space-x-6
    md:justify-end
  `}
`

export const NavLinkItem = styled.li``

export const LanguageSelector = styled.ul`
  ${tw`
    flex
    justify-center
    list-none
    space-x-2
  `}
`

export const LanguageItem = styled.li``
