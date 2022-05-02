import { BiMoon, BiSun } from 'react-icons/bi'

import { useTheme } from '@/hooks/useTheme'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <li className="ml-6 text-neutral-50" aria-hidden>
      {theme === 'light' ? (
        <button onClick={() => setTheme('dark')}>
          <BiMoon size={20} />
        </button>
      ) : (
        <button onClick={() => setTheme('light')}>
          <BiSun size={20} />
        </button>
      )}
    </li>
  )
}
