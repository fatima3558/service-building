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

  // set session after login or register: don't forget to redirect after!
  setSession = (user) => {
   
  }

  render() {
    return (
      <div className="App">
        <LoginRegisterContainer 
          setSession={this.handleRegister}
        />
      </div>
    )
  }
}

export default App;
