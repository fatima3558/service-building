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

	handleClick = (e) => {
		e.preventDefault()
		const reviewToSave = {}
		reviewToSave.place = {
			name: this.props.selectedPlace.name,
			id: this.props.selectedPlace.place_id,
			address: this.props.selectedPlace.vicinity
		}
		reviewToSave.user = this.props.user._id
		reviewToSave.description = this.state.description
		reviewToSave.program = this.state.program
		console.log(reviewToSave);
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