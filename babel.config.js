module.exports = {
  presets: [
    [
      '@babel/env',
      {
        useBuiltIns: 'usage',
      },
    ],
    '@babel/preset-react',
  ],
  plugins: ['add-module-exports', '@babel/plugin-proposal-class-properties'],
};
