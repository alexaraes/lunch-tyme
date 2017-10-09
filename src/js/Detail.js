import React from 'react';
import PropTypes from 'prop-types';
import GoogleMap from './GoogleMap';

const Detail = ({restaurants, selectedRestaurant, selectedRestaurantId, toggleFilter, filterIsVisible, handleFilterChange}) => {
	const {name} = selectedRestaurant;
	return (
			<div className="row">
				<div className="hidden-md hidden-lg col-xs-12">
					<GoogleMap 
						restaurants={restaurants} 
			            selectedRestaurant={selectedRestaurant}
			            selectedRestaurantId={selectedRestaurantId} 
			            selectRestaurant={this.selectRestaurant}
			        />
				</div>
				<div className="hidden-md hidden-lg col-xs-12">
					{name}
					<button className="slide-btn" onClick={(e) => toggleFilter(e)}>Hide</button>
				</div>
			</div>
	);
};

Detail.propTypes = {
    
}

export default Detail;