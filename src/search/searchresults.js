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
						<span>Your search returned <em><span id="searchresults__count" /></em> matches</span>

						<form className="search__searchbox" autoComplete="off" action="/search" method="get">
							<input placeholder="Search" className="search__box" name="q" type="text" />
							<input type="submit" value="🔍 Search" />
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
