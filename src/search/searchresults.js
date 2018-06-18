import PropTypes from 'prop-types';
import React, { Fragment } from 'react';


/**
 * The Search Results component
 *
 * @disable-docs
 */
const SearchResults = ( page ) => {

	return (
			<Fragment>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.2.1/lunr.min.js" />
				<div className="au-body">
						<h2>{ page.heading }</h2>
						Your search for "<em><span id="searchresults__query" /></em>" returned:

						<pre><div id="searchresults__resultslist" /></pre>
				</div>
			</Fragment>
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
