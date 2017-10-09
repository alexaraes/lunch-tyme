import React from 'react';
import PropTypes from 'prop-types';
import GoogleMap from './GoogleMap';

const Detail = ({restaurants, selectedRestaurant, selectedRestaurantId, toggleFilter, filterIsVisible, handleFilterChange}) => {
	const {name} = selectedRestaurant;
	return (
			<div className={`test ${filterIsVisible ? 'slide-in': 'slide-out'}`}>
				<button className="slide-btn" onClick={(e) => toggleFilter(e)}>Hide</button>
				
				{name}
			</div>
	);
};

Detail.propTypes = {
    
}

export default Detail;