import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json'
    }
  },
  setupFilesAfterEnv: ['jest-extended'],
  moduleFileExtensions: [ 'ts', 'js' ],
  testMatch: [ '<rootDir>/ts/**/*.test.ts' ],
  testPathIgnorePatterns: [],
  bail: true,
  verbose: true
};

export default config;
