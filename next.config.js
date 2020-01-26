const path = require('path');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css')
const withImages = require('next-images')

module.exports = withImages(
  withCSS(
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
  ),
);