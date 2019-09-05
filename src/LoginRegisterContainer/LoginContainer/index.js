import React, {Component} from 'react';

class LoginContainer extends Component {
	constructor() {
		super()
		this.state = {

		}
	}

	render() {
		return(
			<button onClick={this.props.toggleRegistered}>Need to Register?</button>
		)
	}
}

export default LoginContainer