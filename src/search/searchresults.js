import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Search Results component
 *
 * @disable-docs
 */
const SearchResults = ( page ) => (
		<div className="au-body">
				<h2>{ page.heading }</h2>
				<div className="searchresults" />
		</div>
);


SearchResults.propTypes = {
	/**
	 * _body: (partials)(4)
	 */
	_body: PropTypes.node.isRequired,
};


SearchResults.defaultProps = {};


export default SearchResults;
