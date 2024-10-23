import { cn } from './cn'

describe('cn', () => {
  it('merges Tailwind classes correctly', () => {
    const result = cn('p-4', 'bg-red-500', 'bg-blue-500')
    expect(result).toBe('p-4 bg-blue-500')
  })

  it('merges multiple dynamic class inputs', () => {
    const result = cn('text-lg', ['hover:text-blue-500'], {
      'font-bold': true,
      'font-light': false
    })
    expect(result).toBe('text-lg hover:text-blue-500 font-bold')
  })

  it('returns an empty string if no classes are provided', () => {
    const result = cn()
    expect(result).toBe('')
  })
})
