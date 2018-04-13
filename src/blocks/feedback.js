import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Feedback component to be used after all content blocks
 */
const Feedback = ( page ) => {

	const HeadingTag = `h3`;

	return (
		<div className="au-body au-grid feedback">
			<div className="container-fluid">
				<div className="row">
					<div className="col-xs-12">
						<HeadingTag className="au-display-lg">{ page.title }</HeadingTag>
						<p>
							<a href={ page.buttonUrl }>
								{ page.buttonText }
							</a>
						</p>
						<p>
							Email: <a href="mailto:guides-feedback@digital.gov.au">guides-feedback@digital.gov.au ></a>
						</p>
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
