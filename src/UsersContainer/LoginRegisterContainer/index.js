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
						setSession={this.props.setSession}
					/> : 
					<RegisterContainer 
						toggleRegistered={this.toggleRegistered}
						setSession={this.props.setSession}
					/>
				}
			</div>
		)
	}
}

export default LoginRegisterContainer