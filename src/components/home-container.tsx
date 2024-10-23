'use client'

import { type MotionProps, motion } from 'framer-motion'
import type { HTMLAttributes } from 'react'

type Props = MotionProps & HTMLAttributes<HTMLDivElement>

export function HomeContainer(props: Readonly<Props>): JSX.Element {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={{ staggerChildren: 0.05 }}
      className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      {...props}
    />
  )
}
