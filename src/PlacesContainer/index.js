import React, { Component } from 'react';

class PlacesContainer extends Component {
    constructor() {
        super()
        this.state = {
            search: '',
            list: []
        }
    }

    componentDidMount() {
        this.getList()
        this.showList()
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

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    doSearch = (e) => {
        e.preventDefault()
        console.log(this.state.search, "what we're about throw at the api!");
    }
    
    render() {
        console.log(this.state, "state in placesContainer");
        return(
            <div>
                <PlacesList />
            </div>
        )
    }
}

export default PlacesContainer