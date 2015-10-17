var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),

  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    library: 'ImageAccordion',
    libraryTarget: 'umd'
  },

  debug: process.env.NODE_ENV !== 'production',

  devtool: 'sourcemap',

  externals: [
    {
      react: {
        root: 'React',
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'react'
      }
    }
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader?stage=0',
        include: [
          path.resolve(__dirname, 'src')
        ]
      }
    ]
  },
}
