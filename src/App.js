import React, { Component } from 'react';
import './App.css';

import LoginRegisterContainer from './LoginRegisterContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null,
      loggedIn: false
    }
  }

  // handle register method

  // handle login method

  render() {
    return (
      <div className="App">
        <LoginRegisterContainer />
      </div>
    )
  }
}

export default App;
