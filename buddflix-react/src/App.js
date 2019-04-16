import React, { Component } from 'react';
import Navigation from './Navigation/Navigation';
import logo from './logo.png';

class App extends Component {
  render() {
    return (
      <>
        <Navigation />
      <img src={logo} className="App-logo" alt="logo" />
       
          
      </>
    );
  }
}

export default App;
