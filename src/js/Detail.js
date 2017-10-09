import React from 'react';
import PropTypes from 'prop-types';
import GoogleMap from './GoogleMap';

const Detail = ({restaurants, selectedRestaurant, selectedRestaurantId, toggleDetail, detailIsVisible, handleDetailChange}) => {
	const {name, category, location, contact} = selectedRestaurant;

	const {formattedAddress} = location;
	const line1 = formattedAddress[0];
	const line2 = formattedAddress[1];
	const line3 = formattedAddress[2];

	const {formattedPhone, twitter} = contact;

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
				<div className="hidden-md hidden-lg col-xs-12 details">
					<span className="detail-title">{name}</span> <br /> <span className="detail">{category}</span>
				</div>
				<div className="hidden-md hidden-lg col-xs-12">
					<div className=" detail-info">{line1}</div>
					<div className=" detail-info">{line2}</div>
					<div className=" detail-info">{line3}</div>
					<div className=" detail-info">{`@${twitter}`}</div>
				</div>
			</div>
	);
};

Detail.propTypes = {
    
}

export default Detail;