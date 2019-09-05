import React, {Component} from 'react';

class LoginContainer extends Component {
	constructor() {
		super()
		this.state = {
			phone: '',
			password: ''
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
	}

	render() {
		return(
			<div>
				<div>
					<h2>Log into your account below:</h2>
					<form onSubmit={this.props.handleLogin}>
						<input
							name="phone"
							placeholder="phone number"
							type="tel"
							value={this.state.phone}
							onChange={this.handleChange}
						/>
						<br/>
						<input
							name="password"
							placeholder="password"
							type="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
						<br/>
					</form>
					<button>Register</button>
				</div>
				<button onClick={this.props.toggleRegistered}>Need to Register?</button>
			</div>
		)
	}
}

export default LoginContainer