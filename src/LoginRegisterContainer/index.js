import React, {Component} from 'react';

import LoginContainer from './LoginContainer';
import RegisterContainer from './RegisterContainer';

class LoginRegisterContainer extends Component {
	constructor() {
		super()
		this.state = {
			isRegistered: true
		}
	}

	toggleRegistered = () => {
		this.setState({
			isRegistered: !this.state.isRegistered
		})
	}

	render() {
		return(
			<div>
				<h1>Welcome to ServiceBuilding!</h1>
				{this.state.isRegistered ? 
					<LoginContainer 
						toggleRegistered={this.toggleRegistered}
						handleLogin={this.props.handleLogin}
					/> : 
					<RegisterContainer 
						toggleRegistered={this.toggleRegistered}
						handleRegister={this.props.handleRegister}
					/>
				}
			</div>
		)
	}
}

export default LoginRegisterContainer