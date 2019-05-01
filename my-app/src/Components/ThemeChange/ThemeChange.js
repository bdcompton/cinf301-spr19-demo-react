import React, { Component } from 'react';
import { SplitButton, Dropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../../App.css';

class ThemeChange extends Component {

    state = { theme: null }
  
  chooseTheme = (theme, evt) => {
    evt.preventDefault();
    if (theme.toLowerCase() === 'reset') { theme = null }
    this.setState({ theme });
  }
  
  render() {
  
    const { theme } = this.state;
    const themeClass = theme ? theme.toLowerCase() : 'default';
    
    const parentContainerStyles = {
      position: 'absolute',
      height: '100%',
      width: '100%',
      display: 'table'
    };
    
    const subContainerStyles = {
      position: 'relative',
      height: '100%',
      width: '100%',
      display: 'table-cell',
      verticalAlign: 'middle'
    };
    
    return (
      <div className="App-header text-center">
      <div style={parentContainerStyles}>
        <div style={subContainerStyles}>
        
          <span className={`h1 center-block text-center text-${theme ? themeClass : 'muted'}`} style={{ marginBottom: 25 }}>{theme || 'Default'}</span>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
            />
          <div className="center-block text-center">
            <SplitButton bsSize="large" bsStyle={themeClass} title={`${theme || 'Default'} Theme`}>
              <Dropdown.Item eventKey="Primary" onSelect={this.chooseTheme}>Primary Theme</Dropdown.Item>
              <Dropdown.Item eventKey="Danger" onSelect={this.chooseTheme}>Danger Theme</Dropdown.Item>
              <Dropdown.Item eventKey="Success" onSelect={this.chooseTheme}>Success Theme</Dropdown.Item>
              <Dropdown.Item divider />
              <Dropdown.Item eventKey="Reset" onSelect={this.chooseTheme}>Default Theme</Dropdown.Item>
            </SplitButton>
            <p>
        <Link to={`/dynamic/`}> Click to see a some dynamic components! </Link>
    </p>
          </div>
          </div>
          
        </div>
      </div>
    );
    
  }
  
}
  
  export default ThemeChange;