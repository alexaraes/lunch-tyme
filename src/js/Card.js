import React from 'react';
import PropTypes from 'prop-types';


const Card = ({restaurant, selectedRestaurant, selectRestaurant, index}) => {
	const {name, backgroundImageURL, location, category} = restaurant;
	const {address, city} = location;

	var bgImg = {
        backgroundImage: 'url(' + backgroundImageURL + ')'
    }

	return <div id={`card-${index}`} alt={name} style={bgImg} className={`card col-sm-12 col-md-6 col-lg-4 ${restaurant === selectedRestaurant ? 'is-active' : ''}`} 
				onClick={(e) => selectRestaurant(restaurant, index, false, e)}>
			
			<div>
				<span className="details title">
					{name}
				</span>
				<span className="details category">
					{category}
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