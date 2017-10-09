import React from 'react';
import PropTypes from 'prop-types';

class GoogleMap extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			markers: []
		}
	}

	componentWillReceiveProps(nextProps) {
		const {selectedRestaurant, selectedRestaurantId} = nextProps;
		const {location} = selectedRestaurant;
		const {latitude, longitude} = location;

		this.hideAll();

		console.log(selectedRestaurantId);

		this.showInfoWindow(selectedRestaurantId);

	}

	componentDidMount() {
		const {restaurants, selectedRestaurant} = this.props;
		const {location} = selectedRestaurant;
		const {lat, lng, address} = location;

		this.map = new google.maps.Map(this.refs.map, {
          center: {lat: lat, lng: lng},
          mapTypeControl: false,
          zoom: 14
        });

        this.createMarkers(restaurants);
	}

	showInfoWindow(index) {
		console.log(index);
		const {markers} = this.state;
		markers[index] && markers[index].iw.open(this.map, markers[index]);
	}

	hideAll() {
		const {markers} = this.state;

		markers.forEach(marker => {
    		marker.iw.close();
    	})

	}

	createMarkers(restaurants){
 
	    const {selectRestaurant, selectedRestaurant, selectedRestaurantId} = this.props;
	    
	    const {markers} = this.state;
	 
	    restaurants.map((restaurant, index) => {
	        const {location, name} = restaurant;
	        const {lat, lng, formattedAddress} = location;

	        const line1 = formattedAddress[0];
	        const line2 = formattedAddress[1];
	        const line3 = formattedAddress[2];

	        this.marker = new google.maps.Marker({
	            position: {lat: lat, lng: lng},
	            map: this.map,
	            label: {
	                color: '#ffffff',
	                text: `${index+1}`
	            }
	        });

	        const content = `<div class="title-marker">${name}</div><div class="marker">${line1}</div><div class="marker">${line2}</div><div class="marker">${line3}</div>`
	        const iw = new google.maps.InfoWindow({
	        	content: content
	        })

	        this.marker.iw = iw;
	 
	        this.marker.addListener('click', function() {

	        	this.hideAll();

	            selectRestaurant(restaurant, index, true);
 
	        }.bind(this));

	        markers.push(this.marker);

	        this.showInfoWindow(selectedRestaurantId);
	    })
	 
	}

	render() {
		const {filterIsVisible} = this.props;
		return (
				<div className={`row ${filterIsVisible ? 'filter-is-visible' : ''}`}>
					<div className="col-md-12">
						<div className="mapContainer">
			          		<div id="map" ref="map"></div>
			        	</div>
			        </div> 
	        	</div> 
		)
	}
}

GoogleMap.propTypes = {
	restaurants: PropTypes.array.isRequired,
	selectRestaurant: PropTypes.func.isRequired
};

export default GoogleMap;