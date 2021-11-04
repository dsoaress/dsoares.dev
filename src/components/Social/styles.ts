import tw, { styled } from 'twin.macro'

export const Wrapper = styled.div`
  ${tw`mx-auto`}
`

export const Content = styled.ul`
  ${tw`inline-flex space-x-6 list-none`}
`

export const SocialItem = styled.li`
  ${tw`space-x-6 transition-transform duration-200 transform hover:scale-110 active:scale-95`}
`
