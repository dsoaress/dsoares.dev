import Link from 'next/link'

export function Footer(): React.JSX.Element {
  return (
    <footer className="mt-12">
      <p className="text-center text-zinc-400">
        Made with ❤️ with{' '}
        <Link
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          data-umami-event="Clicked Next.js"
          className="font-medium text-rose-300 hover:underline"
        >
          Next.js
        </Link>
      </p>
    </footer>
  )
}
