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
					<div className="col-xs-12 feedback_form__container">
						<span className="helpful__question">Was this page helpful?</span>
						<span className="helpful__buttons">
							<button className="au-btn au-btn--dark helpful_yes">Yes</button>
							<button className="au-btn au-btn--dark helpful_no">No</button>
						</span>
						<div className="feedback_response__container">
							<textarea placeholder="Please type your feedback here" className="au-text-input au-text-input--block au-text-input--dark helpful__yes__textarea"/>
						</div>
						<div className="feedback_response__container">
							<textarea placeholder="Please type your feedback here" className="au-text-input au-text-input--block au-text-input--dark helpful__no__textarea"/>
						</div>
						<span className="helpful__buttons">
							<button className="au-btn au-btn--dark helpful__yes__suggestion__submit">Submit</button>
							<button className="au-btn au-btn--dark helpful__no__suggestion__submit">Submit</button>
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
