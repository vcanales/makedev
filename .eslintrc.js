module.exports = {
  extends: 'airbnb',
  plugins: [ 'react' ],
  env: {
    node: true,
    browser: true,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            extensions: [ '.js', '.jsx' ],
          },
        },
      },
    },
  },
};
