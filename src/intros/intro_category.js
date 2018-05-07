import PropTypes from 'prop-types';
import Slugify from 'slugify';
import React from 'react';


/**
 * The intro component
 */
const Intro = ( page ) => {

	const theme = page._pages[ page._ID ].theme ? page._pages[ page._ID ].theme : 'dark';

	return (
		<div className={`au-body au-grid intro intro--${ theme }`}>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-offset-3 col-xs-9">
						<div className="textwrapper">
							{ page.category && <span id={ (page.category).toLowerCase() } className="section__section intro__category">{ page.category }</span> }
							<div><h2 className="display-3">{ page.title ? page.title : page._pages[ page._ID ].pagetitle }</h2></div>
							{ page.subtitle && <p className="intro__subtitle">{ page.subtitle }</p> }
							<div className="intro__text">{ page._body }</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}


Intro.propTypes = {
	/**
	 * category: Content strategy
	 */
	category: PropTypes.string,

	/**
	 * title: Page title  # if not given, it takes the title from the current page
	 */
	title: PropTypes.string,

	/**
	 * subtitle: Welcome to our intro
	 */
	subtitle: PropTypes.string,

	/**
	 * _body: (text)(4)
	 */
	_body: PropTypes.node.isRequired,
};


Intro.defaultProps = {};


export default Intro;
