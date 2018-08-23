const commonPaths = require('./paths');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: '[name].js',
    path: commonPaths.outputPath,
    chunkFilename: '[name].js',
  },
  devServer: {
    host: '0.0.0.0'
  },
  module: {
    rules: [
      {
          test: /\.scss/,
          use: [
              'style-loader',
              {
                  loader: 'css-loader',
                  options: {
                      sourceMap: true
                  }
              },
              {
                  loader: 'sass-loader',
                  options: {
                      sourceMap: true,
                      includePaths: commonPaths.imagesFolder
                  }
              }
          ]
      },
    ],
  },
};
