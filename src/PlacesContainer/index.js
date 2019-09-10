import React, { Component } from 'react';

import OnePlaceContainer from './OnePlaceContainer'

class PlacesContainer extends Component {
    constructor() {
        super()
        this.state = {
            list: [],
            selectedPlace: null,
        }
    }

    componentDidMount() {
        this.getList()
    }

    getList = async () => {
        if(this.props.searchList !== null) {
            this.setState({
                list: this.props.searchResults
            })
        } else {
            const nearbyPlacesResponse = await fetch('http://localhost:8000/places', {
            	method: 'get',
            	credentials: 'include'
            })
            if(nearbyPlacesResponse.status !== 200) {
                throw Error('Could not get nearby places')
            }
            const nearbyPlaces = await nearbyPlacesResponse.json()

            this.setState({
                list: [...nearbyPlaces]
            })       
        }
    }

    seeOne = async (id) => {
        console.log("seeOne");
    	const selectedPlaceResponse = await fetch(`http://localhost:8000/places/${id}`, {
            method: 'GET',
            credentials: 'include'
        })
    	if(selectedPlaceResponse.status !== 200) {
    		throw Error('Could not find this place')
    	}
    	const selectedPlace = await selectedPlaceResponse.json() 

        // if place is coming from google query, the info we want will be in an object inside the selectedPlace object
        let placeToSee
        if(selectedPlace.result !== undefined) {
            placeToSee = selectedPlace.result
        } else {
            placeToSee = selectedPlace
        }
        
    	this.setState({
    		selectedPlace: placeToSee
    	})
    }

    seeAll = () => {
    	this.setState({
    		selectedPlace: null
    	})
    }
    
    render() {
        let showList
        if(this.props.searchList) {
            showList = this.props.searchList.map(place => {
                return (
                    <div className="single-item" key={place.id}>
                        <p>{place.name}, Rating: {place.rating}</p>
                        <p>{place.address}</p>
                        <button onClick={this.seeOne.bind(null, place.id)}>See Reviews</button>
                        <br/>
                    </div>
                )
            })
        } else {
    	   showList = this.state.list.map(place => {
        		return(
        			<div className="single-item" key={place.id}>
        				<p>{place.name}, Rating: {place.rating}</p>
        				<p>{place.address}</p>
        				<button onClick={this.seeOne.bind(null, place.id)}>See Reviews</button>
        				<br/>
        			</div>
        		)
        	})
        }

        return(
            <div id="places-container">
            	{this.state.selectedPlace ? 
            		<OnePlaceContainer 
            			selectedPlace={this.state.selectedPlace}
            			seeAll={this.seeAll}
                        user={this.props.user}
            		/> :
            		<div id="list">
                		{showList}
                	</div>
            	}
            </div>
        )
    }
}

export default PlacesContainer