import React from 'react';

function OnePlaceContainer(props) {
	return(
		<div>
			<h3>{props.selectedPlace.result.name}</h3><br/>
			<h5>Rating: {props.selectedPlace.result.rating}</h5><br/>
			<h5>Address: {props.selectedPlace.result.formatted_address}</h5>
			<button onClick={props.seeAll}>Back to places</button>
		</div>
	)
}

export default OnePlaceContainer