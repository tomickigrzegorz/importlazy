const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const prodPlugin = (plugin, mode) => {
  return mode === 'development' ? () => { } : plugin;
};

const configureDevServer = () => {
  return {
    contentBase: './sources',
    open: true,
    port: 3000,
    liveReload: true,
    hot: true,
    stats: 'errors-only',
    inline: true,
    watchContentBase: true,
  };
};

module.exports = (env, { mode }) => {
  const inDev = mode === 'development';
  return {
    target: inDev ? 'web' : 'browserslist',
    mode: inDev ? 'development' : 'production',
    devtool: inDev ? 'eval-source-map' : false,
    entry: {
      script: './sources/js/index.js',
    },
    devServer: inDev ? configureDevServer() : {},
    output: {
      path: path.resolve(__dirname, './docs'),
      filename: './[name].[fullhash].js',
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
