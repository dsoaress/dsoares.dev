import ThemeToggle from '@/components/ThemeToggle'

export default function Layout({ children }) {
  return (
    <>
      <ThemeToggle />
      <div className="max-w-screen-lg px-4 mx-auto">{children}</div>
    </>
  )
}
