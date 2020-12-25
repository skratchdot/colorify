const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const history = require('connect-history-api-fallback');
const convert = require('koa-connect');

module.exports = {
  context: path.resolve(__dirname, 'src/app/js'),
  entry: {
    'js/app': path.resolve(__dirname, 'src/app/js/App.js'),
    'css/app': path.resolve(__dirname, 'src/app/less/app.less'),
    'workers/worker-math': path.resolve(
      __dirname,
      'src/app/js/workers/worker-math.js'
    ),
  },
  output: {
    path: path.resolve(__dirname, 'build/app'),
    publicPath: '/colorify/',
    filename: '[name].bundle.js',
    globalObject: 'this',
  },
  serve: {
    add: (app/*, middleware, options*/) => {
      const historyOptions = {
        // ... see: https://github.com/bripkens/connect-history-api-fallback#options
        index: '/colorify/index.html',
        verbose: true,
      };
      app.use(convert(history(historyOptions)));
    },
    devMiddleware: {
      publicPath: '/colorify/',
    },
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.md$/, loader: 'raw-loader' },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          { loader: 'css-loader', options: { url: false } },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                relativeUrls: false,
                paths: [path.resolve(__dirname)],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/app/index.html'),
      inject: false,
      hash: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/app/index.html'),
      filename: '404.html',
      inject: false,
      hash: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'node_modules/bootstrap/dist/fonts/*'),
          to: path.resolve(__dirname, 'build/app/fonts/'),
          flatten: true,
        },
        {
          from: path.resolve(__dirname, 'node_modules/font-awesome/fonts/*'),
          to: path.resolve(__dirname, 'build/app/fonts/'),
          flatten: true,
        },
        {
          from: path.resolve(__dirname, 'src/app/img/**/*'),
          to: path.resolve(__dirname, 'build/app/img/'),
        },
        {
          from: path.resolve(__dirname, 'src/app/svg/**/*'),
          to: path.resolve(__dirname, 'build/app/svg/'),
        },
        {
          from: path.resolve(__dirname, 'src/app/favicon.ico'),
          to: path.resolve(__dirname, 'build/app/'),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};
