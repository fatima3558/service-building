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
		if(this.props.selectedPlace.result) {
			placeReviewsResponse = await fetch(`http://localhost:8000/reviews/${this.props.selectedPlace.result.place_id}`)
		} else {
			placeReviewsResponse = await fetch(`http://localhost:8000/reviews/${this.props.selectedPlace.googleId}`)
		}
		const placeReviews = await placeReviewsResponse.json()

		this.setState({
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
					<div key={i}>
						<p>{review.description}</p>
						<small>{review.date}</small>
					</div>
				)
			})
		}

		return(
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
					</div>
				}
				<br/>
				<br/>
				<div>
					{listedReviews ? listedReviews : null}
				</div>
				<button onClick={this.props.seeAll}>Back to places</button>
			</div>
		)
	}
}

export default OnePlaceContainer