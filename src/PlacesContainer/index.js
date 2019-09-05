import React, { Component } from 'react';

import OnePlaceContainer from './OnePlaceContainer'

class PlacesContainer extends Component {
    constructor() {
        super()
        this.state = {
            search: '',
            list: [],
            selectedPlace: null,
        }
    }

    componentDidMount() {
        this.getList()
    }

    getList = async () => {
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

    seeOne = async (id) => {
    	const selectedPlaceResponse = await fetch(`http://localhost:8000/places/${id}`)
    	if(selectedPlaceResponse.status !== 200) {
    		throw Error('Could not find this place')
    	}
    	const selectedPlace = await selectedPlaceResponse.json()

    	this.setState({
    		selectedPlace: selectedPlace
    	})
    }

    seeAll = () => {
    	this.setState({
    		selectedPlace: null
    	})
    }
    
    render() {
	    const showList = this.state.list.map(place => {
    		return(
    			<div key={place.id}>
    				<p>{place.name}, Rating: {place.rating}</p>
    				<p>{place.address}</p>
    				<button onClick={this.seeOne.bind(null, place.id)}>See Reviews</button>
    				<br/>
    			</div>
    		)
    	})

        return(
            <div>
            	{this.state.selectedPlace ? 
            		<OnePlaceContainer 
            			selectedPlace={this.state.selectedPlace}
            			seeAll={this.seeAll}
            		/> :
            		<div>
                		{showList}
                	</div>
            	}
            </div>
        )
    }
}

export default PlacesContainer