const path = require('path');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images')

module.exports = withImages(
  withSass({
    devIndicators: {
      autoPrerender: false,
    },
    webpack(config, options) {
      config.resolve.alias['src'] = path.join(__dirname, 'src');
      config.resolve.extensions.push('.ts', '.tsx');
      return config;
    },
  }),
);