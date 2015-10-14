var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },

  debug: process.env.NODE_ENV !== 'production',

  devtool: 'sourcemap',

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader?stage=0',
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ]
      }
    ]
  },
}
