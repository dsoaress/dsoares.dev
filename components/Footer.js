import { RiCopyleftLine } from 'react-icons/ri'

import settings from '@/settings'

export default function Footer() {
  const { title } = settings
  return (
    <footer className="flex justify-center items-center py-6 text-sm text-secondary-700 dark:text-secondary-300 bg-secondary-100 dark:bg-secondary-900">
      {title}
      <RiCopyleftLine className="mx-1" />
      {new Date().getFullYear()}
    </footer>
  )
}
