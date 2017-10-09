import React from 'react';
import PropTypes from 'prop-types';

const Header = ({detailIsVisible, toggleDetail, handleDetailChange}) => {
	return (
		<div className="row header">
			<div className="col-xs-2 img-responsive" onClick={(e) => toggleDetail(e)} >
				<img className={`arrow-icon ${detailIsVisible ? '' : 'hide'}`} src={require("../images/ic_webBack@2x.png")} />
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
	detailIsVisible: PropTypes.bool.isRequired,
	toggleDetail: PropTypes.func.isRequired,
	handleDetailChange: PropTypes.func.isRequired
}

export default Header;