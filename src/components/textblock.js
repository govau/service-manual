import PropTypes from 'prop-types';
import React from 'react';


/**
 * The textblock component
 */
const Textblock = ( page ) => (
	<div className="uikit-body uikit-grid textblock">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="textwrapper textblock__text">
						{ page._body }
					</div>
					{ page.quote && <blockquote className="textblock__quote">{ page.quote }</blockquote> }
				</div>
			</div>
		</div>
	</div>
);


Textblock.propTypes = {
	/**
	 * quote: This is pulled out of the text
	 */
	quote: PropTypes.string,

	/**
	 * _body: (partials)(4)
	 */
	_body: PropTypes.node.isRequired,
};


Textblock.defaultProps = {};


export default Textblock;
