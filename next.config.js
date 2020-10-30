const path = require('path');
const withPlugins = require('next-compose-plugins');
const images = require('next-images');
const css = require('@zeit/next-css');
const sass = require('@zeit/next-sass');

const resourcesLoader = {
  loader: 'sass-resources-loader',
  options: {
    resources: [
      'src/components/bosons/index.scss',
      'src/components/quarks/index.scss',
    ],
  },
};

const cssConfig = {
  cssModules: true,
};

const sassConfig = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[name]__[local]___[hash:base64:5]',
  },
};

const imagesConfig = {
  exclude: path.resolve(__dirname, 'src/assets/icons'),
};

const nextConfig = {
  webpack: (config) => {
    config.module.rules.map((rule) => {
      if (rule.test && (rule.test.source.includes('scss') || rule.test.source.includes('sass'))) {
        rule.use.push(resourcesLoader);
      }
      return rule;
    });
    return config;
  },
};

module.exports = withPlugins([
  [sass, sassConfig],
  [css, cssConfig],
  [images, imagesConfig],
], nextConfig);
