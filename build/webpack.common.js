const webpack = require('webpack')
const path = require('path')
const TSLintPlugin = require('tslint-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: path.resolve('src/index.ts'),

  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    publicPath: path.resolve(__dirname)
  },

  target: 'node',

  node: {
    __filename: true,
    __dirname: true
  },

  module: {
    rules: [
      {
        test: /\.(ts)?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },

      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: ['*', '.ts', 'js', '.json'],
    modules: [
      'src',
      'node_modules'
    ],
    alias: {
      '@': path.resolve(__dirname, '../src/')
    }
  },

  externals: [
    nodeExternals()
  ],

  plugins: [
    new TSLintPlugin({
      files: [path.resolve(__dirname, '../src/**/*.ts')]
    })
  ]
}
