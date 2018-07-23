import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import AUtextInput from '@gov.au/text-inputs';


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
						<p><span id="searchresults__count" /> results for <span id="searchresults__query"/></p>
						<div className="row">
							<div className="col-xs-12 col-sm-9 col-md-6 col-lg-6">
								<form className="search__searchbox" role="search" autoComplete="off" action="/search" method="get">
									<input type="text" className="au-text-input round--left" name="q" id="search-input__serp" placeholder="Digital Guides"/>
									<button type="submit" className="au-btn icon icon--search--dark round--right" id="search-btn__serp"><span className="search-btn__label">Search</span></button>
								</form>
							</div>
						</div>
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
