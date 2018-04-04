import PropTypes from 'prop-types';
import React from 'react';
import Accordion from '../../scripts/uikit/accordion.js'

/**
 * The LongDescription component
 */
const LongDescription = ( page ) => {

	return (
		<div className="long-description-accordion">
			<Accordion header={ page.title }>
				{ page._body }
			</Accordion>
		</div>
	);
}


LongDescription.propTypes = {
	/**
	 * _body: (text)(1)
	 */
	_body: PropTypes.node.isRequired,

	/**
	 * title: Header
	 */
	title: PropTypes.node.isRequired,
};


LongDescription.defaultProps = {

};


export default LongDescription;
