import React from 'react';
import PropTypes from 'prop-types';

const Header = ({filterIsVisible, toggleFilter, handleFilterChange}) => {
	return (
		<header className={`${filterIsVisible ? 'filter-is-visible' : ''}`}>
	        <h1>Lunch Tyme</h1>
      	</header>
	);
};

Header.propTypes = {
	filterIsVisible: PropTypes.bool.isRequired,
	toggleFilter: PropTypes.func.isRequired,
	handleFilterChange: PropTypes.func.isRequired
}

export default Header;