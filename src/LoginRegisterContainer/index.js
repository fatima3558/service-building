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
				{this.state.isRegistered ? 
					<LoginContainer toggleRegistered={this.toggleRegistered}/> : 
					<RegisterContainer toggleRegistered={this.toggleRegistered}/>
				}
			</div>
		)
	}
}

export default LoginRegisterContainer