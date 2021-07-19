import tw, { styled } from 'twin.macro'

export const Wrapper = styled.div`
  ${tw`my-20`}
`

export const ProjectsList = styled.div`
  ${tw`
    grid
    gap-8
    mt-8

    md:(
      grid-cols-2
      gap-6
    )

    lg:grid-cols-3
  `}
`
