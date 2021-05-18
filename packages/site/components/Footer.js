import { RiCopyleftLine } from 'react-icons/ri'

import seoData from '@/seo'

export default function Footer() {
  return (
    <footer className="flex items-center justify-center py-6 mt-10 text-sm bg-secondary-100 text-secondary-700 dark:bg-secondary-900 dark:text-secondary-300">
      {seoData.title}
      <RiCopyleftLine className="mx-1" />
      {new Date().getFullYear()}
    </footer>
  )
}
