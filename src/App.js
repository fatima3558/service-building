import React, { Component } from 'react';
import './App.css';

import UsersContainer from './UsersContainer';
import PlacesContainer from './PlacesContainer';
import HeaderContainer from './HeaderContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null,
      view: 'user'
    }
  }

  // set session after login or register
  setSession = (user) => {
    this.setState({
      user: user,
      view: 'place'
    })
  }

  toggleView = () => {
    if(this.state.view === 'user') {
      this.setState({
        view: 'place'
      })
    } else if(this.state.view === 'place') {
      this.setState({
        view: 'user'
      })
    }
  }

  render() {
    return (
      <div className="App">
        <HeaderContainer 
          user={this.state.user}
          view={this.state.view}
          toggleView={this.toggleView}
        />
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
