const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const prodPlugin = (plugin, mode) => {
  return mode === 'development' ? () => { } : plugin;
};

const configureDevServer = () => {
  return {
    contentBase: './sources/js',
    open: true,
    port: 3000,
    inline: true,
    stats: 'errors-only',
    hot: true,
  };
};

module.exports = (env, { mode }) => {
  const inDev = mode === 'development';
  return {
    devtool: inDev ? 'eval-source-map' : false,
    entry: {
      script: './sources/js/index.js',
    },
    devServer: inDev ? configureDevServer() : {},
    output: {
      path: path.resolve(__dirname, './docs'),
      filename: './[name].[hash].js',
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
