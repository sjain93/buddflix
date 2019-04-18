import React, { Component } from 'react';
import AgeVerification from './AgeVerification/AgeVerification';
import Navigation from './Navigation/Navigation';








class App extends Component {
  render() {
    return (

     <>
          <div id="modal-root"></div>

          <Navigation />
          <AgeVerification 
            toggle={show => <button onClick={show}>Open</button>}
            content={hide => (
                <button onClick={hide}>Close</button>
              
            )}
          />

        </>

    );
  }
}

export default App;
