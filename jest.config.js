module.exports = {
  verbose: true,
  transform: {
    '^.+\\.js$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|svg|eot|otf|webp|ico|ttf|woff)$': '<rootDir>/src/config/tests/fileTransformer.js',
  },
  transformIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
  ],
  moduleNameMapper: {
    '^~/components(.*)$': '<rootDir>/src/components$1',
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  collectCoverageFrom: [
    'pages/**/*.js',
    'src/**/*.{js,jsx}',
    '!src/config/tests/**',
    '!**/node_modules/**',
  ],
  coverageDirectory: 'coverage',
};
