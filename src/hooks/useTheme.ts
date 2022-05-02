import { useEffect, useState } from 'react'

export function useTheme() {
  const initialTheme: 'light' | 'dark' =
    typeof window !== 'undefined' && localStorage.theme ? localStorage.theme : 'dark'

  const [theme, setTheme] = useState(initialTheme)
  const previousTheme = theme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(previousTheme)
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme, previousTheme])

  return { theme, setTheme }
}
