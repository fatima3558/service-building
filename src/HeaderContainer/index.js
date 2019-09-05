import React, { Component } from 'react';

class HeaderContainer extends Component {
	constructor() {
		super()
		this.state = {

		}
	}

	seeOtherContainer = () => {
		this.props.toggleView()
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
						<form onSubmit={this.doSearch}>
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