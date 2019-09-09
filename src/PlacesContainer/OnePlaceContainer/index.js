import React, { Component } from 'react';

import ReviewFormContainer from './ReviewFormContainer';

class OnePlaceContainer extends Component {
	constructor() {
		super()
		this.state = {
			writingReview: false,
			reviews: ["review1", "review2", "review3"]
		}
	}

	componentDidMount() {
		this.getReviews()
	}

	getReviews = async () => {
		const placeReviewsResponse = await fetch(`http://localhost:8000/reviews/${this.props.selectedPlace.result.place_id}`)
		const placeReviews = await placeReviewsResponse.json()

		this.setState({
			reviews: [...placeReviews]
		})

	}

	showReviewForm = () => {
		this.setState({
			writingReview: true
		})
	}

	render() {
		const listedReviews = this.state.reviews.map((review, i) => {
			return(
				<div key={i}>
					{review}
				</div>
			)
		})

		return(
			<div>
				{this.state.writingReview ? 
					<ReviewFormContainer 
						selectedPlace={this.props.selectedPlace.result}
						user={this.props.user}
					/> :
					<div>
						<h3>{this.props.selectedPlace.result.name}</h3><br/>
						<h5>Rating: {this.props.selectedPlace.result.rating}</h5><br/>
						<h5>Address: {this.props.selectedPlace.result.formatted_address}</h5>
						<button onClick={this.showReviewForm}>Write a Review</button>
					</div>
				}
				<br/>
				<br/>
				<div>
					{listedReviews}
				</div>
				<button onClick={this.props.seeAll}>Back to places</button>
			</div>
		)
	}
}

export default OnePlaceContainer