import PropTypes from 'prop-types';
import React from 'react';


/**
 * The quote component
 */

const Quote = ( page ) => (

	<div className="au-body au-grid quote">
		<div className="container-fluid">
			<div className="row">
				<div className="col-xs-11 col-md-offset-3 col-md-4 col-lg-offset-3 col-lg-4">
					<blockquote>
						<div className="textwrapper">
							<div className="quote__mark"></div>
							<div className="quote__text">{ page.quote }</div>
							{ page._body && <cite className="quote__by">{ page._body }</cite> }
						</div>
					</blockquote>
				</div>
			</div>
		</div>
	</div>
);


Quote.propTypes = {
	/**
	 * quote: Hello World!
	 */
	quote: PropTypes.string.isRequired,

	/**
	 * _body: (text)(4)
	 	represents the citation- who said the quote and optionally a URL where it can be found.
	 */
	_body: PropTypes.node.isRequired,
};


Quote.defaultProps = {};


export default Quote;
