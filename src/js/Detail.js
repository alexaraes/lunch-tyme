import React from 'react';
import PropTypes from 'prop-types';
import GoogleMap from './GoogleMap';

const Detail = ({restaurants, selectedRestaurant, selectedRestaurantId, toggleDetail, detailIsVisible, selectRestaurant}) => {
	const {name, category, location, contact} = selectedRestaurant;

	const {formattedAddress} = location;
	const line1 = formattedAddress[0];
	const line2 = formattedAddress[1];
	const line3 = formattedAddress[2];

	return (
			<div className="row">
				<div className="hidden-md hidden-lg col-xs-12">
					<GoogleMap 
						detailIsVisible={detailIsVisible}
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
					<div className=" detail-info"><span>{line1}</span><br /><span>{line2}</span></div>
					{(() => {
				        if(contact === null) {
				        	return <div className=" detail-info">No contact information available.</div>
				        }
				        else {
				        	return (<div><div className=" detail-info">{contact.formattedPhone}</div> 
				        			<div className=" detail-info">{`@${contact.twitter}`}</div></div>)
				        }
				      })()}
				</div>
			</div>
	);
};

Detail.propTypes = {
    restaurants: PropTypes.array.isRequired, 
    selectedRestaurant: PropTypes.object.isRequired, 
    selectedRestaurantId: PropTypes.number.isRequired, 
    toggleDetail: PropTypes.func.isRequired, 
    detailIsVisible: PropTypes.bool.isRequired, 
    selectRestaurant: PropTypes.func.isRequired
}

export default Detail;