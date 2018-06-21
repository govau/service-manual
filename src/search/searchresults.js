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
					<div className="col-xs-12">
						<script src="https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.2.1/lunr.min.js" />
						<div>
								<h2>{ page.heading }</h2>
								Your search for "<em><span id="searchresults__query" /></em>" returned:

								<ul><div id="searchresults__resultslist" /></ul>
						</div>
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
