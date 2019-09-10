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

	handleClick = async (e) => {
		e.preventDefault()
		//create review object to save in db
		const reviewToSave = {}
		if(this.props.selectedPlace.place_id) {
			reviewToSave.place = {
				name: this.props.selectedPlace.name,
				googleId: this.props.selectedPlace.place_id,
				address: this.props.selectedPlace.vicinity
			}
		} else {
			reviewToSave.place = {
				name: this.props.selectedPlace.name,
				googleId: this.props.selectedPlace.googleId,
				address: this.props.selectedPlace.address
			}
		}
		reviewToSave.description = this.state.description
		reviewToSave.program = this.state.program

		console.log("this is the review object being sent to the backend");
		console.log(reviewToSave);
		//request server to save review in db

		try{
			const savedReviewResponse = await fetch(`http://localhost:8000/reviews/new`, {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify(reviewToSave),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			console.log(savedReviewResponse);
			
			// const savedReview = await savedReviewResponse.json()
			const wtf = await savedReviewResponse.text()
			console.log(wtf, "review that has been saved as .text()");
			//clear form
			this.setState({
				description: '',
				program: null
			})

			//call method in parent container to refresh reviews and hide form
			this.props.hideReviewForm()

		}
		catch (err) {
			console.error("Error posting Review")
			console.error(err);
		}
	}

	render() {
		return(
			<div>
				<h1>Write a Review for {this.props.selectedPlace.name}</h1>
				<form>
					Tell us what happened.<br/>
					<textarea 
						name="description" 
						height="10" 
						width="20"
						onChange={this.handleChange}
					/>
					<br/>
					Pick a category for the main problem you experienced.<br/>
					<select name="program" onChange={this.handleChange}>
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
					<br/>
					<button onClick={this.handleClick}>Post Review</button>
				</form>
			</div>
		)
	}
}

export default ReviewFormContainer