import React, { Component } from 'react';

class EditReviewContainer extends Component {
	constructor() {
		super()
		this.state = {
			description: '',
			program: null
		}
	}

	componentDidMount() {
		this.setCurrentReview()
	}

	setCurrentReview = () => {
		this.setState({
			description: this.props.review.description,
			program: this.props.review.program
		})
	}

	handleChange = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
	}

	handleClick = async (e) => {
		e.preventDefault()
		// send updated review info to our api
		const updatedReviewContent = this.state
		console.log("below is the content we will be submitting to update this review");
		console.log(updatedReviewContent);
		const updatedReviewResponse = await fetch(`http://localhost:8000/reviews/${this.props.review._id}`, {
			method: 'PUT',
			credentials: 'include',
			body: JSON.stringify(updatedReviewContent),
			headers: {
				'Content-Type': 'application/json'
			}
		})

		const updatedReview = await updatedReviewResponse.json()
		console.log("parsed updated review response:");
		console.log(updatedReview);

		// toggle edit form so it goes away
		this.props.toggleEdit()
	}

	render() {
		return(
			<form>
				Tell us what happened.<br/>
				<textarea 
					name="description"
					defaultValue={this.props.review.description}
					height="10" 
					width="20"
					onChange={this.handleChange}
				/>
				<br/>
				Pick a category for the main problem you experienced. 
				<br/>
				When you last updated this review, you chose {this.props.review.program}. <br/>
				<select 
					name="program" 
					onChange={this.handleChange}
				>
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
				<button onClick={this.handleClick}>Update Review</button>
			</form>
		)
	}
}

export default EditReviewContainer