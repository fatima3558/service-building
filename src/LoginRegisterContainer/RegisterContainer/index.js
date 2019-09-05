import React, {Component} from 'react';

class RegisterContainer extends Component {
	constructor() {
		super()
		this.state = {

		}
	}

	render() {
		return(
			<button onClick={this.props.toggleRegistered}>Need to Log In?</button>
		)
	}
}

export default RegisterContainer