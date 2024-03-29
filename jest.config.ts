import { Config } from 'jest'
import nextJest from 'next/jest'

const createJestConfig = nextJest({
  dir: './'
})

const config: Config = {
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: [
    '<rootDir>/src/_data/**/*.ts',
    '<rootDir>/src/components/**/*.{ts,tsx}',
    '<rootDir>/src/containers/**/*.{ts,tsx}',
    '!<rootDir>/src/**/index.ts'
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/components(.*)$': '<rootDir>/src/components$1',
    '^@/containers(.*)$': '<rootDir>/src/containers$1',
    '^@/contexts(.*)$': '<rootDir>/src/contexts$1',
    '^@/data(.*)$': '<rootDir>/src/_data$1',
    '^@/hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@/mocks(.*)$': '<rootDir>/src/mocks$1',
    '^@/services(.*)$': '<rootDir>/src/services$1',
    '^@/types(.*)$': '<rootDir>/src/types$1'
  }
}

export default createJestConfig(config)
