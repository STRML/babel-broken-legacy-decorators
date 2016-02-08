## Babel 6.5 Regression

In Babel 6.5, plugin order appears to have been changed, breaking
[babel-plugin-transform-decorators-legacy](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy)
and possibly others.

See the [reference issue](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy/issues/19).

Output:

```bash
$ npm install
$ npm run build

ERROR in ./index.jsx
Module build failed: SyntaxError: babel-broken-decorators/index.jsx: Decorators are not supported yet in 6.x pending proposal update.
  3 |
  4 | @ReactMixin({componentDidUpdate: console.log})
> 5 | class Foo extends React.Component {
    | ^
  6 |   render() {
  7 |     return <span>Bar</span>;
  8 |   }
    at File.buildCodeFrameError (babel-broken-decorators/node_modules/babel-core/lib/transformation/file/index.js:436:15)
```

#### Hints

Disabling the stage-0 preset or placing the plugin in babelrc fixes the issue.
