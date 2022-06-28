import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  function switchTheme() {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <li className="ml-6 w-11 text-neutral-50" aria-hidden>
      {mounted && (
        <button onClick={switchTheme}>
          {resolvedTheme === 'light' ? <BiMoon size={20} /> : <BiSun size={20} />}
        </button>
      )}
    </li>
  )
}
