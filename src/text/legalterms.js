import PropTypes from 'prop-types';
import React from 'react';


/**
 * The legalterm component to be used inside the footer
 */
const LegalTerms = ( page ) => (
	<div className="au-body au-grid legalterms">
		<div className="container-fluid">
			<div className="row">
				<div className="col-xs-12">
					{ page._body }
				</div>
			</div>
		</div>
	</div>
);


LegalTerms.propTypes = {
	/**
	 * _body: (text)(4)
	 */
	_body: PropTypes.node.isRequired,
};


LegalTerms.defaultProps = {};


export default LegalTerms;
