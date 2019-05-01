import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../App.css';

class Tests extends Component {

    //eslint-disable-next-line
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    componentWillUnmount() {
        clearInterval(this.timerID);
      } 
    tick() {
        this.setState({
          date: new Date()
        });
      }  

render() {
  return (
    <div className="App-header">
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
      <p>
        <Link to={`/theme/`}> Click to see a cool Theme changer using react-bootstrap! </Link>
    </p>
    </div>
  );
 }
}

export default Tests;