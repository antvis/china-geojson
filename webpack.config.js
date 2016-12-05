var webpack = require('atool-build/lib/webpack');

module.exports = function(webpackConfig) {

  webpackConfig.plugins.some(function(plugin, i){
    if(plugin instanceof webpack.optimize.CommonsChunkPlugin) {
      webpackConfig.plugins.splice(i, 1);

      return true;
    }
  });

  webpackConfig.output.library = 'ChinaGeoJSON';
  webpackConfig.output.libraryTarget = 'umd';
  webpackConfig.output.umdNamedDefine = true;
  return webpackConfig;
};
