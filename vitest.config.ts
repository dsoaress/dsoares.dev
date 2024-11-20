import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    setupFiles: ['./vitest.setup.ts'],
    globals: true,
    clearMocks: true,
    mockReset: true,
    restoreMocks: true,
    environment: 'jsdom',
    coverage: {
      enabled: true,
      include: ['src/**/*.{ts,tsx}', '!src/**/layout.tsx'],
      reporter: ['text', 'html', 'lcov']
    }
  }
})
