import Link from 'next/link'

export function Footer() {
  return (
    <footer className="mt-12">
      <p className="text-center text-neutral-400">
        Made with ❤️ with{' '}
        <Link
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-300 hover:underline"
        >
          Next.js
        </Link>
      </p>
    </footer>
  )
}
