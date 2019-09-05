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

	handleSubmit = async (e) => {
		e.preventDefault()
		const loginInfo = JSON.stringify(this.state)

		const loginResponse = await fetch('http://localhost:8000/users/login', {
			method: 'post',
			credentials: 'include',
			body: loginInfo,
			headers: {
				'Content-Type': 'application/json'
			}
		})

		if(loginResponse.status !== 201) {
			throw Error('Could not find user')
		}
		const loginSuccessful = await loginResponse.json()
		delete loginSuccessful.password
		console.log(loginSuccessful, "response after successful login");
		this.props.setSession(loginSuccessful)
	}

	render() {
		return(
			<div>
				<div>
					<h2>Log into your account below:</h2>
					<form onSubmit={this.handleSubmit}>
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
						<button>Log In</button>
					</form>
				</div>
				<button onClick={this.props.toggleRegistered}>Need to Register?</button>
			</div>
		)
	}
}

export default LoginContainer