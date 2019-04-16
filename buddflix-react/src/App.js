import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AgeVerification from './AgeVerification/AgeVerification';
import Categories from './Categories';
import WeedList from './WeedList';
import Strain from './Strain';
import MovieList from './MovieList';
import Movie from './Movie';
import Trailer from './Trailer';
import Modal from './Modal/Modal';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          
          <div id='modal-root'></div>
          <AgeVerification 
            toggle={show => <button onClick={show}>Show</button>}
            content={hide => (
              
              <Modal>
              <button onClick={hide}>Close</button>
              </Modal>  
              
            )}
          />
          <Categories />
          <WeedList />
          <Strain />
          <MovieList />
          <Movie />
          <Trailer />
        
        
        </header>
      </div>
    );
  }
}

export default App;
