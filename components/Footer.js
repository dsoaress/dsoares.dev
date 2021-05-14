import { RiCopyleftLine } from 'react-icons/ri'

import settings from '@/settings'

export default function Footer() {
  const { title } = settings
  return (
    <footer className="bg-secondary-100 flex justify-center items-center mt-16 py-6 text-secondary-700 text-sm dark:bg-secondary-900 dark:text-secondary-300">
      {title}
      <RiCopyleftLine className="mx-1" />
      {new Date().getFullYear()}
    </footer>
  )
}
