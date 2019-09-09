import React, { Component } from 'react'

class ReviewFormContainer extends Component {
	constructor() {
		super()
		this.state = {
			description: '',
			program: null
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
	}

	selectProgram = (e) => {
		this.setState({
			program: e.currentTarget.value
		})
	}

	handleClick = async (e) => {
		e.preventDefault()
		//create review object to save in db
		const reviewToSave = {}
		reviewToSave.place = {
			name: this.props.selectedPlace.name,
			googleId: this.props.selectedPlace.place_id,
			address: this.props.selectedPlace.vicinity
		}
		reviewToSave.user = this.props.user._id
		reviewToSave.description = this.state.description
		reviewToSave.program = this.state.program

		//request server to save review in db
		const savedReviewResponse = await fetch(`http://localhost:8000/reviews/new`, {
			method: 'post',
			credentials: 'include',
			body: JSON.stringify(reviewToSave),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		
		const savedReview = await savedReviewResponse.json()
		console.log(savedReview, "review that has been saved");
		//clear form
		this.setState({
			description: '',
			program: null
		})

		//call method in parent container to refresh reviews and hide form
		this.props.hideReviewForm()
	}

	render() {
		return(
			<div>
				<h1>Write a Review for {this.props.selectedPlace.name}</h1>
				<form>
					Tell us what happened.
					<textarea 
						name="description" 
						height="10" 
						width="20"
						onChange={this.handleChange}
					/>
					<br/>
					Pick a category for the main problem you experienced.
					<select name="program" onChange={this.selectProgram}>
						<option value="">--</option>
						<option value="Housing">Chicago Housing Authority</option>
						<option value="Medical">Medicare / Medicaid</option>
						<option value="SNAP">SNAP</option>
						<option value="WIC">WIC</option>
						<option value="Unemployment">Unemployment</option>
						<option value="Social Security">SSI / SSDI</option>
						<option value="Communication">Bad communication (mail, phone, email)</option>
						<option value="Service">Bad customer service</option>
						<option value="Other">Other problem</option>
					</select>
					<button onClick={this.handleClick}>Post Review</button>
				</form>
			</div>
		)
	}
}

export default ReviewFormContainer