module.exports = {
  content: [
    './src/index.tsx',
    './src/**/*.tsx',
    './src/**/*.ts'
  ],
  whitelistPatterns: [],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
};

