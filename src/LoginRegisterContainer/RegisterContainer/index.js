import React, {Component} from 'react';

class RegisterContainer extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			zipcode: '',
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
					<h2>Register for an account below:</h2>
					<form onSubmit={this.props.handleRegister}>
						<input
							name="username"
							placeholder="username"
							type="text"
							value={this.state.username}
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
						<input
							name="zipcode"
							placeholder="zipcode"
							type="number"
							value={this.state.zipcode}
							onChange={this.handleChange}
						/>
						<br/>
						<input
							name="phone"
							placeholder="phone number"
							type="tel"
							value={this.state.phone}
							onChange={this.handleChange}
						/>
						<br/>
					</form>
					<button>Register</button>
				</div>
				<button onClick={this.props.toggleRegistered}>Need to Log In?</button>
			</div>
		)
	}
}

export default RegisterContainer