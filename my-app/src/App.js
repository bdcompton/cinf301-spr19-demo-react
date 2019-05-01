import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Tests from './Components/Tests/Tests';
import './App.css';

class App extends Component {

  //eslint-disable-next-line
  constructor() {
    super();
  }

render() {
  return (
      <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route path="/testing/" component = {Tests}/>
      </BrowserRouter>
  );
}
}

export default App;
