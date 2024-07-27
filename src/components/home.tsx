'use client'
import { motion } from 'framer-motion'

import { About } from './about'
import { EmailList } from './email-list'
import { Footer } from './footer'
import { Header } from './header'
import { Location } from './location'
import { Logo } from './logo'
import { Social } from './social'

export function Home() {
  return (
    <main>
      <Logo size={36} className="mx-auto mb-12 text-primary-300" />
      <motion.div
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.05 }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <Header />
        <Social />
        <About />
        <Location />
        <EmailList />
      </motion.div>
      <Footer />
    </main>
  )
}
