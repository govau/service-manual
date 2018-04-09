import PropTypes from 'prop-types';
import React from 'react';
import AUaccordion from '../../scripts/uikit/accordion.js'

/**
 * The LongDescription component
 */
const LongDescription = ( page ) => {

	return (
		<div className="long-description-accordion">
			<AUaccordion header="Full text description of image">
				{ page._body }
			</AUaccordion>
		</div>
	);
}


LongDescription.propTypes = {
	/**
	 * _body: (text)(1)
	 */
	_body: PropTypes.node.isRequired
};


LongDescription.defaultProps = {

};


export default LongDescription;
