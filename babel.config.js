module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@components': './src/components',
            '@assets': './src/assets',
            '@routes': './src/routes',
            '@screens': './src/screens',
            '@storage': './src/storage',
            '@utils': './src/utils',
          },
        },
      ],
    ],
  }
}
