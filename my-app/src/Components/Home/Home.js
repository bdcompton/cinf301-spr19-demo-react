import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../Logo/logo.svg';
import '../../App.css';

class Home extends Component {

    //eslint-disable-next-line
    constructor() {
      super();
    }
render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <Link to={`/testing/`}> Click to go to Tests! </Link>
        </p>
      </header>
    </div>
  );
}
}

export default Home;