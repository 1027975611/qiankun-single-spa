const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;
const { merge } = require('webpack-merge');
const { name } = require('./package');


module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  const singleSpaConfig = {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd',
    },
    externals: {
      'zone.js': 'Zone',
    },
  };
  const mergedConfig = merge(singleSpaWebpackConfig, singleSpaConfig);
  return mergedConfig;
};
