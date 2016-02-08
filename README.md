## Babel 6.5 Regression

In Babel 6.5, plugin order appears to have been changed, breaking
[babel-plugin-transform-decorators-legacy](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy)
and possibly others.

See the [reference issue](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy/issues/19).

### Reproduction:

```bash
$ node build
/project/babel-broken-decorators/node_modules/babel-core/lib/transformation/file/index.js:585
      throw err;
      ^

SyntaxError: /project/babel-broken-decorators/index.jsx: Decorators are not supported yet in 6.x pending proposal update.
  3 |
  4 | @ReactMixin({componentDidUpdate: console.log})
> 5 | class Foo extends React.Component {
    | ^
  6 |   render() {
  7 |     return <span>Bar</span>;
  8 |   }
    at File.buildCodeFrameError (/project/babel-broken-decorators/node_modules/babel-core/lib/transformation/file/index.js:436:15)
```
