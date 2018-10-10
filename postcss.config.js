module.exports = ({ file, options, env }) => ({
  parser: false,
  plugins: {
    'postcss-import': { root: file.dirname },
    'postcss-url': {},
    'postcss-cssnext': {
      browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
    },
    'cssnano': {}
  }
});
