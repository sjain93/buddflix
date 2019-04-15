import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AgeVerification from './AgeVerification';
import Categories from './Categories';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          BuddFlix 
          <AgeVerification />
          <Categories />
          
        </header>
      </div>
    );
  }
}

export default App;
