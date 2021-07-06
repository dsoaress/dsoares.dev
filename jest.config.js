module.exports = {
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['<rootDir>/components/**/*.{js,jsx,ts,tsx}'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  moduleNameMapper: {
    '^@/assets(.*)$': '<rootDir>/assets$1',
    '^@/components(.*)$': '<rootDir>/components$1',
    '^@/lib(.*)$': '<rootDir>/lib$1',
    '^@/styles(.*)$': '<rootDir>/styles$1'
  }
}
