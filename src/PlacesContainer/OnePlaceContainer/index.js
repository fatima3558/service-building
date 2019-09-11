import React, { Component } from 'react';

import ReviewFormContainer from './ReviewFormContainer';

class OnePlaceContainer extends Component {
	constructor() {
		super()
		this.state = {
			writingReview: false,
			reviews: []
		}
	}

	componentDidMount() {
		this.getReviews()
	}

	getReviews = async () => {
		let placeReviewsResponse
		console.log("about to try to send request for updated placeReviews");
		if(this.props.selectedPlace.result) {
			placeReviewsResponse = await fetch(`http://localhost:8000/reviews/${this.props.selectedPlace.result.place_id}`)
		} else {
			placeReviewsResponse = await fetch(`http://localhost:8000/reviews/${this.props.selectedPlace.googleId}`)
		}
		const placeReviews = await placeReviewsResponse.json()
		console.log("placeReviews after getting a response from my api");
		console.log(placeReviews);

		this.setState({
			writingReview: false,
			reviews: [...placeReviews]
		})
	}

	showReviewForm = () => {
		//show review form
		this.setState({
			writingReview: true
		})
	}

	hideReviewForm = () => {
		//hide review form
		console.log("about to reset state in hideReviewForm in OnePlaceContainer");
		this.setState({
			writingReview: false
		})
		//get reviews from db again to include new review
		this.getReviews()
	}

	render() {
		let listedReviews
		if(this.state.reviews !== []) {
			listedReviews = this.state.reviews.map((review, i) => {
				return(
					<div className="single-item" key={i}>
						<p>{review.description}</p>
						<small>{review.date}</small>
					</div>
				)
			})
		}

		return(
			<div id="one-place-container">
				<div>
					{this.state.writingReview ? 
						<ReviewFormContainer 
							selectedPlace={this.props.selectedPlace}
							user={this.props.user}
							hideReviewForm={this.hideReviewForm}
						/> :
						<div>
							<h3>{this.props.selectedPlace.name}</h3><br/>
							<h5>Rating: {this.props.selectedPlace.rating}</h5><br/>
							<h5>Address: {this.props.selectedPlace.formatted_address}</h5>
							<button onClick={this.showReviewForm}>Write a Review</button>
							<button onClick={this.props.seeAll}>Back to places</button>
						</div>
					}
					<br/>
					<br/>
					<div className="list">
						{listedReviews ? listedReviews : null}
					</div>
				</div>
			</div>
		)
	}
}

export default OnePlaceContainer