import tw, { styled } from 'twin.macro'

export const Wrapper = styled.nav`
  ${tw`absolute left-0 right-0 z-10 px-16 pt-12 pb-32 text-sm! bg-gradient-to-b from-neutral-900 to-transparent`}
`

export const NavLinks = styled.ul`
  ${tw`flex justify-center space-x-6 list-none md:justify-end`}
`

export const NavLinkItem = styled.li``

export const LanguageSelector = styled.ul`
  ${tw`flex justify-center space-x-2 list-none `}
`

export const LanguageItem = styled.li``
