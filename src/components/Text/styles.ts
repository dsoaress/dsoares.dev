import { motion } from 'framer-motion'
import tw, { styled } from 'twin.macro'

type TextProps = {
  faded?: boolean
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
}

export const Text = styled(motion.p)<TextProps>(({ faded = false, size = 'base' }) => [
  faded && tw`text-neutral-500`,

  size === 'sm' ? tw`leading-4` : tw`leading-7`,

  size === 'xs' && tw`text-xs`,
  size === 'sm' && tw`text-sm`,
  size === 'base' && tw`text-base`,
  size === 'lg' && tw`text-lg`,
  size === 'xl' && tw`text-xl`,

  tw`font-light`
])
