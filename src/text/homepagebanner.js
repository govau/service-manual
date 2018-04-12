import PropTypes from 'prop-types';
import Slugify from 'slugify';
import React from 'react';


/**
 * The textblock component
 */

const HomepageBanner = ( page ) => {

	return (
		<div className={"container-fluid homepagebanner " + (page.oddrow ? 'homepagebanner__oddrow' : '')}>
			<div class="row">
				<div class="col-xs-12">
					<h2>{ page.heading }</h2>
					{ page._body }
					<a href={ page.button_link }>{ page.button_text }</a>
				</div>
			</div>
		</div>
	)};


HomepageBanner.propTypes = {

	/**
	 * _body: (text)(7)
	 */
	_body: PropTypes.node.isRequired,
};


HomepageBanner.defaultProps = {};


export default HomepageBanner;
