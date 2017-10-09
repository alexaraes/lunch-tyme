import React from 'react';
import PropTypes from 'prop-types';

const Header = ({filterIsVisible, toggleFilter, handleFilterChange}) => {
	return (
			<header>
		        <h1>Lunch Tyme</h1>
		        
					<div style={{width: '20px', backgroundImage: 'url("../images/icon_map@2x.png")'}}/>
	      	</header>
	);
};

Header.propTypes = {
	toggleFilter: PropTypes.func.isRequired,
	handleFilterChange: PropTypes.func.isRequired
}

export default Header;