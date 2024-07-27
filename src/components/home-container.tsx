'use client'

import { motion, MotionProps } from 'framer-motion'
import { HTMLAttributes } from 'react'

export function HomeContainer(props: MotionProps & HTMLAttributes<HTMLDivElement>) {
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
