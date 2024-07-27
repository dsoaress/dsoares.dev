'use client'

import { motion, type MotionProps } from 'framer-motion'
import { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

export type BlockProps = MotionProps & HTMLAttributes<HTMLDivElement>

export function Block({ className, ...rest }: BlockProps) {
  return (
    <motion.div
      variants={{
        initial: { scale: 0.5, y: 50, opacity: 0 },
        animate: { scale: 1, y: 0, opacity: 1 }
      }}
      transition={{ type: 'spring', mass: 3, stiffness: 400, damping: 50 }}
      className={cn(
        'col-span-4 rounded-lg border border-neutral-700 bg-neutral-800 p-6',
        className
      )}
      {...rest}
    />
  )
}
