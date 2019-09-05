import React from 'react';

import AccountContainer from './AccountContainer'
import LoginRegisterContainer from './LoginRegisterContainer';

function UsersContainer(props) {
	return(
		<div>
			{props.user ? 
				<AccountContainer 
					user={props.user}
				/> :
				<LoginRegisterContainer 
					setSession={props.setSession}
				/>
			}
		</div>
	)
}

export default UsersContainer