const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = require('./config');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: `${config.jsFolder}/[name].[hash].js`,
    path: config.outputPath,
    chunkFilename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[local]___[hash:base64:5]',
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([config.outputPath.split('/').pop()], {
      root: config.root,
    }),
    new MiniCssExtractPlugin({
      filename: `${config.cssFolder}/[name].css`,
      chunkFilename: '[id].css',
    }),
  ],
};
