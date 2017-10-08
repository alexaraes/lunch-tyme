import React from 'react';
import PropTypes from 'prop-types';


const Card = ({restaurant, selectedRestaurant, selectRestaurant, index}) => {
	const {name, backgroundImageURL, location} = restaurant;
	const {address, city} = location;

	var bgImg = {
        backgroundImage: 'url(' + backgroundImageURL + ')'
    }

	return <div id={`card-${index}`} alt={name} style={bgImg} className={`card col-sm-12 col-md-6 col-lg-4 ${restaurant === selectedRestaurant ? 'is-active' : ''}`} 
				onClick={() => selectRestaurant(restaurant, index, false)}>
			
			<div className="details">
				<span className="location">
					{name}
				</span>
			</div>
		</div>
}

Card.propTypes = {
	restaurant: PropTypes.object.isRequired,
	selectedRestaurant: PropTypes.object.isRequired,
	selectRestaurant: PropTypes.func.isRequired,
	index: PropTypes.number.isRequired
}

export default Card;