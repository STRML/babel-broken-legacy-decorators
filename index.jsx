import React from 'react';
import ReactMixin from 'react-mixin';

@ReactMixin({componentDidUpdate: console.log})
class Foo extends React.Component {
  render() {
    return <span>Bar</span>;
  }
}
