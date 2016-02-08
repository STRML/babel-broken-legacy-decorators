'use strict';
let path = require('path');

// ------------------------------------------
// Entry points
// ------------------------------------------

let entry = {
  index: 'index.jsx'
};

// ------------------------------------------
// Loaders
// ------------------------------------------

let loaders = [
  // cacheDirectory: true goes to system tmp
  {test: /jsx?$/, loader: 'babel-loader', exclude: /node_modules/, query: {
    cacheDirectory: true,
    plugins: [
      // Re-support class decorators, which have been removed in babel 6 while spec is in flux
      'transform-decorators-legacy',
    ]
  }},
];

// ------------------------------------------
// Output
// ------------------------------------------

let output = {
  path: path.join(__dirname, 'build'),
  publicPath: '/',
  filename: '[name].js'
};

module.exports = {
  entry: entry,
  output: output,
  module: {
    loaders: loaders
  },
  resolve: {
    root: __dirname,
  },
};
