import PropTypes from 'prop-types';
import React from 'react';
import AUctaLink from '../../scripts/uikit/cta-link';


/**
 * The Feedback component to be used after all content blocks
 */
const Feedback = ( page ) => {

	return (
		<div className="au-body au-grid feedback_container">
			<div className="container-fluid">
				<div className="row">
					<div className="col-xs-12">
						<span className="helpful__question">Was this page helpful?</span>
						<span className="helpful__buttons">
							<button className="au-btn helpful_yes">Yes</button>
							<button className="au-btn helpful_no">No</button>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};


Feedback.propTypes = {

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
