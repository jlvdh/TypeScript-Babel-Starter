module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coveragePathIgnorePatterns: [
    'node_modules',
    'output',
    'lib',
    'pgadmin4'
  ]
}
