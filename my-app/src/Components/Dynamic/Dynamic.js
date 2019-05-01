import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Grid from '../Grid/Grid'
import '../../App.css';

class Dynamic extends Component {

    //eslint-disable-next-line
    constructor(props) {
      super(props);
      this.state = {
          isClicked : false
      };

      this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        if(this.state.isClicked === false){
        this.setState ({
            isClicked: true
        });
    }
    else if (this.state.isClicked === true){
        this.setState ({
            isClicked: false
        });
    }
       
    }

    render() {
        let items = [];
        if (this.state.isClicked === true){
            items.push(
                <Grid/>
            );
            
            //this.setState({isClicked :false})
    
        }
        return (
          <div className="App Border">
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
            />
            <header className="App-header">
            {items}
              <p>
              <Button variant="primary" onClick={this.handleClick}>Add a Box</Button>
              </p>
              
            </header>
          </div>
        );
      }
}

export default Dynamic;