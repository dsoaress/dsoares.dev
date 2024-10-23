import Link from 'next/link'
import type { JSX } from 'react'

export function Footer(): JSX.Element {
  return (
    <footer className="mt-12">
      <p className="text-center text-neutral-400">
        Made with ❤️ with{' '}
        <Link
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary-300 hover:underline"
        >
          Next.js
        </Link>
      </p>
    </footer>
  )
}
