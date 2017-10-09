import React from 'react';
import PropTypes from 'prop-types';

const Header = ({filterIsVisible, toggleFilter, handleFilterChange}) => {
	return (
		<div className="row header">
			<div className={`col-xs-2 img-responsive`}>
				<img className="arrow-icon" src={require("../images/ic_webBack@2x.png")} />
			</div>
			<div className="col-xs-8">
				<header>
			        <h1>Lunch Tyme</h1>
			    </header>
			</div>
		    <div className="col-xs-2 img-responsive">
				<img className="map-icon" src={require("../images/icon_map@2x.png")} />
			</div>
      	</div>
	);
};

Header.propTypes = {
	filterIsVisible: PropTypes.bool.isRequired,
	toggleFilter: PropTypes.func.isRequired,
	handleFilterChange: PropTypes.func.isRequired
}

export default Header;