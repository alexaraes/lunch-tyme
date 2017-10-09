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
		const {selectRestaurant, selectedRestaurant, selectedRestaurantId} = nextProps;
		const {location} = selectedRestaurant;
		const {latitude, longitude} = location;

		this.hideAll();

		this.showInfoWindow(selectedRestaurantId);

	}

	componentDidMount() {
		const {restaurants, selectedRestaurant, selectRestaurant} = this.props;
		const {location} = selectedRestaurant;
		const {lat, lng, address} = location;

		this.map = new google.maps.Map(this.refs.map, {
          center: {lat: lat, lng: lng},
          mapTypeControl: false,
          zoom: 8
        });

        this.createMarkers(restaurants);
	}

	showInfoWindow(index) {
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
 
	    const {selectRestaurant, selectedRestaurant, selectedRestaurantId, detailIsVisible} = this.props;
	    
	    const {markers} = this.state;
	 
	    restaurants.map((restaurant, index) => {
	        const {location, name} = restaurant;
	        const {lat, lng, formattedAddress} = location;

	        const line1 = formattedAddress[0];
	        const line2 = formattedAddress[1];
	        const line3 = formattedAddress[2];

	        const centerLatLng = new google.maps.LatLng(lat, lng);

	        this.marker = new google.maps.Marker({
	            position: centerLatLng,
	            map: this.map,
	            label: {
	                color: '#ffffff',
	                text: `${index+1}`
	            }
	        });

	        const content = `<div class="title-marker">${name}</div><div class="marker">${line1}</div><div class="marker">${line2}</div><div class="marker">${line3}</div>`
	        const iw = new google.maps.InfoWindow({
	        	content: content,
	        	disableAutoPan: false
	        })

	        this.marker.iw = iw;


	 
	        this.marker.addListener('click', function() {

	        	this.hideAll();

	            selectRestaurant(restaurant, index, true);
 
	        }.bind(this));

	        markers.push(this.marker);

	        this.showInfoWindow(selectedRestaurantId);
	    })

		const bounds = new google.maps.LatLngBounds();

		for (var i = 0; i < markers.length; i++) {
		 	bounds.extend(markers[i].getPosition());
		}

		this.map.fitBounds(bounds);
	 
	}

	render() {
		const {detailIsVisible} = this.props;
		return (
			<div className="row">
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
	selectRestaurant: PropTypes.func.isRequired,
	selectedRestaurant: PropTypes.object.isRequired,
	selectedRestaurantId: PropTypes.number.isRequired, 
	detailIsVisible: PropTypes.bool.isRequired
};

export default GoogleMap;