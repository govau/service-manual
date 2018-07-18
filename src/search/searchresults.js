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
						<h2 className="au-display-xxl">{ page.heading }</h2>
						<p><span id="searchresults__count" /> results for [query]</p>

						<form className="search__searchbox" role="search" autoComplete="off" action="/search" method="get">
							<input type="search" className="au-text-input" name="text-input" id="text-input" placeholder="Digital Guides"/>
							<input type="submit" className="au-btn au-btn--light icon icon--search" value="Search" />
						</form>

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
