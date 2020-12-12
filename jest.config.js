const { defaults } = require('jest-config');
const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');
const path = require('path');

module.exports = {
  ...defaults,
  preset: 'ts-jest/presets/js-with-ts',
  moduleNameMapper: {
    ...defaults.moduleNameMapper,
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/setupFileMock.js',
    '\\.(css|less|scss|sass)$': '<rootDir>/src/__mocks__/setupFileMock.js',
    ...pathsToModuleNameMapper(compilerOptions.paths ?? [], { prefix: '<rootDir>/src/' })
  },
  moduleDirectories: [...defaults.moduleDirectories, 'src'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest'
  },
  transformIgnorePatterns: [...defaults.transformIgnorePatterns],
  collectCoverageFrom: [
    // by default include all js/ts vanilla + react based files
    'src/**/*.{js,jsx,ts,tsx}',
    // don't include storybook files
    '!src/**/*.story.{js,jsx,ts,tsx}',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
    // don't include demo application setup
    '!src/*.{js,jsx,ts,tsx}',
    '!src/demo/**/*.{js,jsx,ts,tsx}',
    // don't include index files as they are meant to re-export only
    '!src/**/index.{js,ts,jsx,tsx}',
    // don't include these configuration based files as they don't have logic
    // api will be tested with another framework
    // config, locales, theme don't contain business logic
    // pages re-exports files from src/views and has zero logic
    '!src/{__tests__,__testing__,config,locales,theme}/**/*.{js,jsx,ts,tsx}',
    '!src/**/constants.ts'
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100
    }
  },
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'Code Coverage',
        outputDirectory: 'coverage',
        usePathForSuiteName: 'true'
      }
    ]
  ],
  testMatch: [...defaults.testMatch, '**/*.(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: [...defaults.testPathIgnorePatterns, path.resolve(__dirname, 'lib')],
  globals: {
    ...defaults.globals,
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json'
    }
  },
  setupFilesAfterEnv: ['./jest.setup.js']
};
