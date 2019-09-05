import React, { Component } from 'react';
import './App.css';

import UsersContainer from './UsersContainer';
import PlacesContainer from './PlacesContainer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null,
      view: 'user'
    }
  }

  // set session after login or register: don't forget to redirect after!
  setSession = (user) => {
    this.setState({
      user: user,
      view: 'place'
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.view === 'user' ?
          <UsersContainer 
            user={this.state.user}
            view={this.state.view}
            setSession={this.setSession}
          /> : null
        }
        {this.state.view === 'place' ? 
          <PlacesContainer 
            user={this.state.user}
          /> : null
        }
      </div>
    )
  }
}

export default App;
