import React from 'react';
import PropTypes from 'prop-types';

const Detail = ({toggleFilter, filterIsVisible, handleFilterChange}) => {
	return (
			<div className={`test ${filterIsVisible ? 'slide-in': 'slide-out'}`}>
				<button className="slide-btn" onClick={(e) => toggleFilter(e)}>Hide</button>
			</div>
	);
};

Detail.propTypes = {
    
}

export default Detail;