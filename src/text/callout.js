import PropTypes from 'prop-types';
import Slugify from 'slugify';
import React from 'react';


/**
 * The callout component
 */
const Callout = ( page ) => {

	const HeadingTag = `h${ page.level }`;
	const id = page.title ? Slugify( page.title ).toLowerCase() : null;

	return (
	<div className={ `uikit-body uikit-grid callout` } >
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="textwrapper callout__text">
						{ page._body }
					</div>
 				</div>
			</div>
		</div>
	</div>
)};


Callout.propTypes = {
	/**
	 * _body: (text)(7)
	 */
	_body: PropTypes.node.isRequired,
};


Callout.defaultProps = {};


export default Callout;
