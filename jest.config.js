module.exports = {
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['<rootDir>/src/components/**/*.{js,jsx,ts,tsx}'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  moduleNameMapper: {
    '^@/assets(.*)$': '<rootDir>/src/assets$1',
    '^@/components(.*)$': '<rootDir>/src/components$1',
    '^@/lib(.*)$': '<rootDir>/src/lib$1',
    '^@/styles(.*)$': '<rootDir>/src/styles$1'
  }
}
