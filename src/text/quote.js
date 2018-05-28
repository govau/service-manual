import PropTypes from 'prop-types';
import Slugify from 'slugify';
import React from 'react';


/**
 * The quote component
 */
const Quote = ( page ) => (

	// replace <p> with /n
	let template = page._body.props.dangerouslySetInnerHTML.__html.replace(/<\/p[\s\/]*>/gm, "\n");
	// strip other tags
	template = template.replace(/(<([^>]+)>)/ig,"");

	<div className="au-body au-grid quote">
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-offset-3 col-md-4">
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
