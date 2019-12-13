const path = require('path');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images')

module.exports = withImages(
  withSass({
    devIndicators: {
      autoPrerender: false,
    },
    webpack(config, options) {
      config.resolve.alias['ui'] = path.join(__dirname, 'ui');
      config.resolve.extensions.push('.ts', '.tsx');
      return config;
    },
  }),
);