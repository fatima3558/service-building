import React, { Component } from 'react';

class AccountContainer extends Component {
	constructor() {
		super()
		this.state = {
			isEditing: false,
			reviews: []
		}
	}

	componentDidMount() {
		this.getReviews()
	}

	getReviews = async () => {
		const userReviewsResponse = await fetch(`http://localhost:8000/reviews/user/${this.props.user._id}`)
		const userReviews = await userReviewsResponse.json()

		console.log(userReviews, "user reviews in getReviews in AccountContainer");

		this.setState({
			reviews: [...userReviews]
		})
	}

	editReview = async (id, e) => {
		e.preventDefault()
		console.log("this is where we will edit a review");
		console.log(e, id);
	}

	deleteReview = async (id, e) => {
		e.preventDefault()
		console.log("hey delete ", id);
		// send request to api for db to delete this review

		await fetch(`http://localhost:8000/reviews/${id}`, {
			method: 'DELETE',
			credentials: 'include'
		})

		this.getReviews()
	}

	render() {
		const listReviews = this.state.reviews.map((review, i) => {
			return(
				<div key={i}>
					<h5>On {review.date.toLocaleString()}, you said:</h5>
					<p>{review.description}</p><br/>
					<button onClick={this.editReview.bind(null, review._id)}>Edit</button>
					<button onClick={this.deleteReview.bind(null, review._id)}>Delete</button>
				</div>
			)
		})

		return(
			<div>
				<h1>{this.props.user.username}'s Account Information</h1>
				<h5>Zip Code: <span>{this.props.user.zipcode}</span></h5>
				<h5>Phone Number: <span>{this.props.user.phone}</span></h5>
				<div>
					{listReviews}
				</div>
			</div>
		)
	}
}

export default AccountContainer