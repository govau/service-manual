import PropTypes from 'prop-types';
import React from 'react';

// LOCAL
import Childnav from './childnav';


/**
 * The intro_with_nav component
 */
const IntroNav = ( page ) => {

	const theme = page._pages[ page._ID ].theme ? page._pages[ page._ID ].theme : 'dark';

	return (
		<div className={`uikit-body uikit-grid intro intro--withnav intro__wrapper intro--${ theme }`}>
			<div className="container">
				<div className="row">
					<div className="col-md-12">

						<div className="textwrapper intro__textwrapper__withnav">
							<h1 className="intro__headline">{ page.title ? page.title : page._pages[ page._ID ].title }</h1>
						</div>

						{ page && <Childnav page={ page } /> }

						<div className="textwrapper intro__textwrapper__withnav">
							<div className="intro__text">{ page._body }</div>
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
	 * subtitle: Welcome to our intro
	 */
	subtitle: PropTypes.string,

	/**
	 * childnavtitle: In this section
	 */
	childnavtitle: PropTypes.string,

	/**
	 * partials: (partials)(1)
	 */
	_body: PropTypes.node.isRequired,
};


IntroNav.defaultProps = {};


export default IntroNav;
