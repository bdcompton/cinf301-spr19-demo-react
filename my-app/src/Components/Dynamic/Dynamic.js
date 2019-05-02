import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Grid from '../Grid/Grid'
import '../../App.css';

class Dynamic extends Component {
  //eslint-disable-next-line
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      counter: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      counter: this.state.counter + 1
    });

    console.log(this.state.counter);
  }



  render() {
    console.log("hi");
    let items = [];
    for (let i = 0; i < this.state.counter; i++)
      items.push(
        <Grid />
      );
    //this.setState({isClicked :false})

    console.log(items);

    return (
      <div className="App Border">
        <link rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <header className="App-header">
          <div>{items}</div>
          <p>
            <Button variant="primary"
              onClick={() => this.handleClick()}>Add a Box</Button>
          </p>
        </header>
      </div>
    );
  }
}

export default Dynamic;