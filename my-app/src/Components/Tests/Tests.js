import React, { Component } from 'react';
import '../../App.css';

class Tests extends Component {

    //eslint-disable-next-line
    constructor() {
      super();
    }

render() {
  return (
    <div className="App">
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
 }
}

export default Tests;