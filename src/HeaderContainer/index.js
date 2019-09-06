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
					<div>
						<p>Welcome, {this.props.user.username}</p>
						<button onClick={this.seeOtherContainer}>
							{this.props.view === 'user' ?
								'Nearby Places' :
								'My Info'
							}
						</button>
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
					</div> : 
					null
				}
			</div>
		)
	}
}

export default HeaderContainer