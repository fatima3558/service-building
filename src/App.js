import React, { Component } from 'react';
import './App.css';

import UsersContainer from './UsersContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null
    }
  }

  // set session after login or register: don't forget to redirect after!
  setSession = (user) => {
    this.setState({
      user: user,
    })
  }

  render() {
    return (
      <div className="App">
        <UsersContainer 
          user={this.state.user}
          setSession={this.setSession}
        />
      </div>
    )
  }
}

export default App;
