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
						<div className="feedback_item feedback_tagline">
							{ page.title }
						</div>
						<div className="feedback_item feedback_secondary">
							<a className="au-cta-link au-cta-link--dark" href={ page.buttonUrl }>
								{ page.buttonText }
							</a>
						</div>
						<div className="feedback_item feedback_secondary">
							Email: <a className="au-cta-link au-cta-link--dark" href={ page.email_link }>guides-feedback@digital.gov.au</a>
						</div>
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
