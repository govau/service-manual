import PropTypes from 'prop-types';
import React, { Fragment } from 'react';


/**
 * The Search Results component
 *
 * @disable-docs
 */
const SearchResults = ( page ) => {

	return (
			<div className="container-fluid au-body">
				<div className="row">
					<div className="col-xs-12 searchresults__list">
						<h2 className="au-display-xxxl">{ page.heading }</h2>
						<h3>Your search returned <em><span id="searchresults__count" /></em> matches</h3>

						<ul className="searchresults__ul" id="searchresults__resultslist"></ul>
					</div>
				</div>
			</div>
	);
}


SearchResults.propTypes = {
	/**
	 * _body: (partials)(4)
	 */
	_body: PropTypes.node.isRequired,
};


SearchResults.defaultProps = {};


export default SearchResults;