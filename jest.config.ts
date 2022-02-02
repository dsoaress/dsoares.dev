import { Config } from '@jest/types'
import nextJest from 'next/jest'

const createJestConfig = nextJest({
  dir: './'
})

const config: Config.InitialOptions = {
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: ['<rootDir>/src/components/**/*.{js,jsx,ts,tsx}'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/components(.*)$': '<rootDir>/src/components$1',
    '^@/contexts(.*)$': '<rootDir>/src/contexts$1',
    '^@/data(.*)$': '<rootDir>/data$1',
    '^@/hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@/lib(.*)$': '<rootDir>/src/lib$1',
    '^@/localesConfig(.*)$': '<rootDir>/locales.config$1',
    '^@/queries(.*)$': '<rootDir>/src/queries$1',
    '^@/services(.*)$': '<rootDir>/src/services$1',
    '^@/styles(.*)$': '<rootDir>/src/styles$1',
    '^@/types(.*)$': '<rootDir>/src/types$1'
  }
}

export default createJestConfig(config)
