import React, { Component } from 'react';
import AgeVerification from './AgeVerification/AgeVerification';
import Navigation from './Navigation/Navigation';



class App extends Component {

  render() {
    return (

        <>
          <Navigation />
          <AgeVerification />
        </>

    );
  }
}

export default App;
