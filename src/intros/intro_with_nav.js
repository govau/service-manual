import PropTypes from 'prop-types';
import React from 'react';

// LOCAL
import Childnav from '../nav/childnav';


/**
 * The intro_with_nav component
 */
const IntroNav = ( page ) => {

	function formatDate(isodate) {
		const date = new Date(isodate);
		const month = new Array();
		month[0] = "January";
		month[1] = "February";
		month[2] = "March";
		month[3] = "April";
		month[4] = "May";
		month[5] = "June";
		month[6] = "July";
		month[7] = "August";
		month[8] = "September";
		month[9] = "October";
		month[10] = "November";
		month[11] = "December";
		return date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear();
	}

	return (
		<div className="au-grid intro intro--withnav intro__wrapper">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-3">
						<Childnav page={ page } />
					</div>
					<div className="col-md-9">

						<div className="au-body textwrapper intro__textwrapper__withnav">
							<div><h2 className="au-display-xxxl guides-category-header-main-heading intro__headline">{ page.title ? page.title : page._pages[ page._ID ].pagetitle }</h2></div>
						</div>

						<div className="au-body textwrapper intro__textwrapper__withnav">
							<div />
							{ page.subtitle && <p className="guides-category-header-description intro-with-nav__subtitle">{ page.subtitle }</p> }

							<p className="intro__metadata">
							  <dl>
									{ page.created_by && <React.Fragment><dt>Created by</dt><dd><span>{ page.created_by }</span></dd></React.Fragment> }
									{ page.published_date && <React.Fragment><dt>Published</dt><dd><span>{ formatDate(page.published_date) }</span></dd></React.Fragment> }
									{ page.reviewed_date && <React.Fragment><dt>Reviewed</dt><dd><span>{ formatDate(page.reviewed_date) }</span></dd></React.Fragment> }
							  </dl>
							</p>

							<div className="spacer__med" />
							<div className="au-body intro__text">{ page._body }</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}


IntroNav.propTypes = {
	/**
	 * category: Content strategy
	 */
	category: PropTypes.string,

	/**
	 * created_by: Digital Transformation Agency
	 */
	created_by: PropTypes.string,

	/**
	 * published_date: "2018-03-15"
	 */
	published_date: PropTypes.string,

	/**
	 * reviewed_date: "2018-06-25"
	 */
	reviewed_date: PropTypes.string,

	/**
	 * title: Page title  # if not given, it takes the title from the current page
	 */
	title: PropTypes.string,

	/**
	 * subtitle: Welcome to our intro
	 */
	subtitle: PropTypes.string,

	/**
	 * childnavtitle: In this section
	 */
	childnavtitle: PropTypes.string,

	/**
	 * _body: (text)(4)
	 */
	_body: PropTypes.node.isRequired,
};


IntroNav.defaultProps = {};


export default IntroNav;
