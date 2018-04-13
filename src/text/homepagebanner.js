import PropTypes from 'prop-types';
import Slugify from 'slugify';
import React from 'react';


/**
 * The textblock component
 */

const HomepageBanner = ( page ) => {

	return (
		<div className={"au-body container-fluid homepagebanner " + (page.oddrow ? 'homepagebanner__oddrow' : '')}>
			<div className="row">
				<div className="col-xs-12">
					<h2 className="au-display-xxxl">{ page.heading }</h2>
					<div className="homepagebanner_paragraph_container">
						{ page._body }
					</div><br/>
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
