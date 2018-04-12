import PropTypes from 'prop-types';
import Slugify from 'slugify';
import React from 'react';


/**
 * The Category header component
 */

const Categoryheader = ( page ) => {
	return (

<div className="au-body container-fluid">
	<div className="row">
			<div className="col-xs-12">
				<h1>
					{ page.title }
				</h1>

				<div>
					{ page.description }
				</div>
			</div>
		</div>
</div>
	);
}

Categoryheader.propTypes = {
	/**
	 * title: User research
	 */
	title: PropTypes.string,

	/**
	 * description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
	 */
	description: PropTypes.string,
};


Categoryheader.defaultProps = {};


export default Categoryheader;
