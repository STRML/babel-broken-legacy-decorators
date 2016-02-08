var babel = require('babel-core');
var fs = require('fs');

var result = babel.transform(fs.readFileSync('./index.jsx'), {
  inputSourceMap: undefined,
  sourceRoot: '/Users/samuelreed/git/oss/babel-broken-decorators',
  filename: '/Users/samuelreed/git/oss/babel-broken-decorators/index.jsx',
  plugins: [ 'transform-decorators-legacy' ],
  sourceMap: false,
  sourceFileName: 'index.jsx'
});

console.log("If you've made it here, the build succeeded.");
