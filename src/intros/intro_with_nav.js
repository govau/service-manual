import PropTypes from 'prop-types';
import React from 'react';

// LOCAL
import Childnav from '../nav/childnav';


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

						{ page && <Childnav page={ page } /> }

						<div className="textwrapper intro__textwrapper__withnav">
							<h1 className="intro__headline">{ page.title ? page.title : page._pages[ page._ID ].title }</h1>

							{ page.metaTitle1 &&
								<div className="intro__metadata small">
								  <dl>
								  	<dt>{ page.metaTitle1 }</dt>
								    <dd><a href={ page.metalink1 }>{ page.metaTitleValue1 }</a></dd>
								    <dt>{ page.metaTitle2 }</dt>
								    <dd><a href={ page.metalink2 }>{ page.metaTitleValue2 }</a></dd>
								  </dl>
								</div>
							}
						</div>

						<div className="textwrapper intro__textwrapper__withnav">
							{ page.subtitle && <p className="intro__subtitle">{ page.subtitle }</p> }
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
	 * metaTitle1: Created by
	 */
	metaTitle1: PropTypes.string,

	/**
	 * metaValue1: Digital Transformation Agency, Department of Immigration and Border Protection
	 */
	metaValue1: PropTypes.string,

	/**
	 * metaLink1: http://google.com
	 */
	metaLink1: PropTypes.string,

	/**
	 * metaTitle2: 4 June 2017
	 */
	metaTitle2: PropTypes.string,

	/**
	 * metaValue2: 4 June 2017
	 */
	metaValue2: PropTypes.string,

	/**
	 * metaLink2: http://google.com
	 */
	metaLink2: PropTypes.string,

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
