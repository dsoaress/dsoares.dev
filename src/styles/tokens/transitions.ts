import type { TokenType } from '@/types/tokenType'

export const transitions: TokenType = {
  all: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
  transform: 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
  opacity: 'opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
  shadow: 'box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
  colors:
    'background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1), color 0.25s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
}
