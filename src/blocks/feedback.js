import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Feedback component to be used after all content blocks
 */
const Feedback = ( page ) => (
	<div className="uikit-body uikit-grid feedback">
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<span className="feedback__caption">{ page.caption }</span>
					<div>
						<a href={ page.buttonUrl } ><button className="uikit-btn">{ page.buttonText }</button></a>
					</div>
				</div>
			</div>
		</div>
	</div>
);


Feedback.propTypes = {

	/**
	 * caption: This is the first release of Gov.au Service Manual. We'd love to know what's missing or could be done better
	 */
	caption: PropTypes.string.isRequired,

	/**
	 * buttonUrl: /feedback
	 */
	buttonUrl: PropTypes.string.isRequired,

	/**
	 * buttonText: Send us feedback
	 */
	buttonText: PropTypes.string.isRequired,
};


Feedback.defaultProps = {};


export default Feedback;
