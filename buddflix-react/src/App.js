import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Navigation from './Navigation';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          BuddFlix 
          <Navigation />
          
        </header>
      </div>
    );
  }
}

export default App;
