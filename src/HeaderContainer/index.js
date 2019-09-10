import React, { Component } from 'react';

class HeaderContainer extends Component {
	constructor() {
		super()
		this.state = {
			search: ''
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
	}

	seeOtherContainer = () => {
		this.props.toggleView()
	}

	submitSearch = (e) => {
		e.preventDefault()
		this.props.doSearch(this.state.search)
		this.setState({
			search:''
		})
	}

	render() {
		return(
			<div>
				{this.props.user ? 
					<div id="header-container">
						<div id="left">
							<button onClick={this.seeOtherContainer}>
								{this.props.view === 'user' ?
									'Nearby Places' :
									`${this.props.user.username}'s Account`
								}
							</button>
						</div>
						<div id="center">
							<h1>ServiceBuilding</h1>
						</div>
						<div id="right">
							<form onSubmit={this.submitSearch}>
							    <input
							        name="search"
							        type="text"
							        placeholder="search for a place"
							        value={this.state.search}
							        onChange={this.handleChange}
							    />
							    <button>Search</button>
							</form>
						</div>
					</div> : 
					null
				}
			</div>
		)
	}
}

export default HeaderContainer