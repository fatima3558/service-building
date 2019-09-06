import React, { Component } from 'react'

class ReviewFormContainer extends Component {
	constructor() {
		super()
		this.state = {

		}
	}

	handleClick = (e) => {
		e.preventDefault()
		// send review object to backend
			// review form must have:
			// date (timestamped at backend)
			// place id (from props)
			// user id (from props)
			// description (from the form itself)
			// program (from form)
		const reviewToSave = {}
		// reviewToSave.place = this.props.place.id
		reviewToSave.user = this.props.user.id
		console.log(reviewToSave);
	}


	render() {
		return(
			<div>
				<h1>Review Form will go here</h1>
				<form>
					<textarea name="description" height="10" width="20"/>
					<br/>
					<select name="program">
						<option value="">Something</option>
						<option value="">Something</option>
						<option value="">Something</option>
						<option value="">Something</option>
						<option value="">Something</option>
						<option value="">Something</option>
					</select>
					<button onClick={this.handleClick}>Post Review</button>
				</form>
			</div>
		)
	}
}

export default ReviewFormContainer