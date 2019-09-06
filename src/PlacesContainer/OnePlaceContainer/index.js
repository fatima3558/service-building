import React from 'react';

function OnePlaceContainer(props) {
	console.log(props, "props in OnePlaceContainer");
	const getReviews = () => {
		// const placeReviewsResponse = await fetch(`http://localhost:8000/reviews/${props.selectedPlace.result.place_id}`)
		// const placeReviews = placeReviewsResponse.json()
		return("this is where reviews will go!");

	}

	return(
		<div>
			<h3>{props.selectedPlace.result.name}</h3><br/>
			<h5>Rating: {props.selectedPlace.result.rating}</h5><br/>
			<h5>Address: {props.selectedPlace.result.formatted_address}</h5>
			<button onClick={props.seeAll}>Back to places</button>
			<br/>
			<br/>
			{getReviews()}
		</div>
	)
}

export default OnePlaceContainer