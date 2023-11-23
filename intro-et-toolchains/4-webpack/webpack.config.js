import HtmlWebpackPlugin from 'html-webpack-plugin';

/** @type {import('webpack').Configuration} */
const config = {
  entry: './src/main.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      scriptLoading: 'module',
    }),
  ],
  experiments: {
    outputModule: true,
  },
};

export default config;
