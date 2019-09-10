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
      view: 'user',
      searchList: null
    }
  }

  setSession = (user) => {
    this.setState({
      user: user,
      view: 'place',
      searchResults: []
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

  doSearch = async (search) => {
    const bodyOfSearch = {
      query: search
    }
    const searchResponse = await fetch('http://localhost:8000/places/', {
      method: 'post',
      credentials: 'include',
      body: JSON.stringify(bodyOfSearch),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const searchResults = await searchResponse.json()
    this.setState({
      searchList: searchResults
    })
    if(this.state.view === 'user') {
      this.toggleView()
    }
  }

  render() {
    return (
      <div className="App">
        <HeaderContainer 
          user={this.state.user}
          view={this.state.view}
          toggleView={this.toggleView}
          doSearch={this.doSearch}
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
            searchList={this.state.searchList}
          /> : null
        }
        <br/><br/><br/><br/>
        <footer>&copy; Fatima Gomez 2019</footer>
      </div>
    )
  }
}

export default App;
