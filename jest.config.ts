import { Config } from '@jest/types'
import nextJest from 'next/jest'

const createJestConfig = nextJest({
  dir: './'
})

const config: Config.InitialOptions = {
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: [
    '<rootDir>/src/components/**/*.{ts,tsx}',
    '<rootDir>/src/containers/**/*.{ts,tsx}',
    '<rootDir>/src/i18n/**/*.ts',
    '!<rootDir>/src/**/index.ts',
    // TODO: fix this
    '!<rootDir>/**/Header.tsx',
    '!<rootDir>/**/ThemeToggle.tsx'
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/components(.*)$': '<rootDir>/src/components$1',
    '^@/containers(.*)$': '<rootDir>/src/containers$1',
    '^@/contexts(.*)$': '<rootDir>/src/contexts$1',
    '^@/data(.*)$': '<rootDir>/_data$1',
    '^@/hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@/18n(.*)$': '<rootDir>/src/18n$1',
    '^@/mocks(.*)$': '<rootDir>/src/mocks$1',
    '^@/services(.*)$': '<rootDir>/src/services$1',
    '^@/types(.*)$': '<rootDir>/src/types$1'
  }
}

export default createJestConfig(config)
