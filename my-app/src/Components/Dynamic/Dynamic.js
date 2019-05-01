import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Grid from '../Grid/Grid'
import '../../App.css';

class Dynamic extends Component {

    //eslint-disable-next-line
    constructor(props) {
      super(props);

      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let items = [];
        items.push(
            <Grid/>
        );
    }

    render() {
        let items = [];
        return (
          <div className="App">
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
            />
            <header className="App-header">
              <p>
              <Button variant="primary" onClick={this.handleClick}>Add a Grid</Button>
              {items}
              </p>
            </header>
          </div>
        );
      }
}

export default Dynamic;