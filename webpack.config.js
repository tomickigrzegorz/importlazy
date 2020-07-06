const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

function prodPlugin(plugin, mode) {
  return mode === 'development' ? () => { } : plugin;
}

module.exports = (env, { mode }) => {
  const inDev = mode === 'development';
  return {
    devtool: inDev ? 'eval-source-map' : 'none',
    entry: {
      script: './sources/js/index.js',
    },
    output: {
      path: path.resolve(__dirname, './docs'),
      filename: './[name].[contenthash].js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
    plugins: [
      prodPlugin(
        new CleanWebpackPlugin({
          verbose: true,
        }),
        mode
      ),
      new HtmlWebPackPlugin({
        filename: 'index.html',
        template: './sources/index.html',
      }),
    ],
  }
};
