import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Tests from './Components/Tests/Tests';
import ThemeChange from './Components/ThemeChange/ThemeChange';
import Dynamic from './Components/Dynamic/Dynamic'
import './App.css';

class App extends Component {

  //eslint-disable-next-line
  constructor() {
    super();
  }

render() {
  return (
      <BrowserRouter>
      <div className ="Background">
        <Route exact path="/" component={Home}/>
        <Route path="/testing/" component = {Tests}/>
        <Route path="/theme/" component = {ThemeChange}/>
        <Route path="/dynamic/" component = {Dynamic}/>
        </div>
      </BrowserRouter>
  );
}
}

export default App;
