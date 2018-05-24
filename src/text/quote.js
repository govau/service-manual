import PropTypes from 'prop-types';
import React from 'react';


/**
 * The quote component
 */
const Quote = ( page ) => (
	<div className="au-body au-grid quote">
		<div className="container-fluid">
			<div className="row">
				<div className="col-xs-12">
					<blockquote>
						<div className="textwrapper">
							<div className="quote__text">{ page.quote }</div>
							{ page.by && <cite className="quote__by">{ page.by }</cite> }
						</div>
					</blockquote>
				</div>
			</div>
		</div>
	</div>
);


Quote.propTypes = {
	/**
	 * quote: Woof woof woff
	 */
	quote: PropTypes.string.isRequired,

	/**
	 * by: Good boy
	 */
	by: PropTypes.string,
};


Quote.defaultProps = {};


export default Quote;
