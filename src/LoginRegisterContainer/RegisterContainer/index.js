import React, {Component} from 'react';

class RegisterContainer extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			zipcode: '',
			phone: ''
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
	}

	handleSubmit = async (e) => {
		const user = JSON.stringify(this.state)

	    const newUser = await fetch('http://localhost:8000/users/register', {
	      method: 'POST',
	      credentials: 'include',
	      body: user,
	      headers: {
	        'Content-Type': 'application/json'
	      }
	    })

	    if(newUser.status !== 201) {
	      throw Error('Could not register user')
	    }

	    const newUserResponse = await newUser.json()

	    delete newUserResponse.password
	    this.props.setSession(newUserResponse);
	}

	render() {
		return(
			<div>
				<div>
					<h2>Register for an account below:</h2>
					<form onSubmit={this.handleSubmit}>
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
							type="text"
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
						<button>Register</button>
					</form>
				</div>
				<button onClick={this.props.toggleRegistered}>Need to Log In?</button>
			</div>
		)
	}
}

export default RegisterContainer