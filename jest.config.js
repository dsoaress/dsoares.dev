module.exports = {
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['<rootDir>/src/components/**/*.{js,jsx,ts,tsx}'],
  setupFilesAfterEnv: ['<rootDir>/src/lib/setupTests.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  moduleNameMapper: {
    '^@/assets(.*)$': '<rootDir>/src/assets$1',
    '^@/components(.*)$': '<rootDir>/src/components$1',
    '^@/data(.*)$': '<rootDir>/data$1',
    '^@/hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@/lib(.*)$': '<rootDir>/src/lib$1',
    '^@/services(.*)$': '<rootDir>/src/services$1',
    '^@/styles(.*)$': '<rootDir>/src/styles$1',
    '^@/types(.*)$': '<rootDir>/src/types$1'
  }
}
