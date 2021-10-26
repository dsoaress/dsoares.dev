import { motion } from 'framer-motion'
import tw, { styled } from 'twin.macro'

export const Button = styled(motion.button)`
  ${tw`flex items-center px-6 text-sm font-medium transition-colors duration-300 border-0 rounded-md cursor-pointer h-11 bg-primary-600 text-neutral-50 hover:bg-primary-700 active:bg-primary-800`}

  svg {
    ${tw`text-lg mr-2!`}
  }
`
