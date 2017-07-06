import PropTypes from 'prop-types';
import Slugify from 'slugify';
import React from 'react';


// UIKIT
export const InpageNavLinksItem = ({ section }) => {
	const attributeOptions = {};

	if( typeof section.onClick === 'function' ) {
		attributeOptions.onClick = section.onClick;
	}

	return (
		<li>
			<a href={ `#${ section.link }` } { ...attributeOptions }>{ section.title }</a>
		</li>
	);
};

export const InpageNavLinks = ({ title, sections }) => (
	<nav className="uikit-inpage-nav-links">
		<h2 className="uikit-inpage-nav-links__heading uikit-display-2">{ title }</h2>
		<ul className="uikit-link-list">
			{ sections.map( ( section, i ) => <InpageNavLinksItem key={ i } section={ section } /> ) }
		</ul>
	</nav>
);

InpageNavLinks.defaultProps = {
	title: 'Contents',
};


/**
 * The sections component
 */
const Sections = ( page ) => {
	const sections = [];

	page.sections.map( ( section ) => sections.push({
		link: Slugify( section ).toLowerCase(),
		title: section,
	}));

	return (
		<div className="uikit-body uikit-grid sections">
			<div className="container">
				<div className="row">
					<div className="col-md-12 js-sections">
						<InpageNavLinks title="In this section" sections={ sections } />
					</div>
				</div>
			</div>
		</div>
	);
};


Sections.propTypes = {
	/**
	 * sections:
	 *   - Why
	 *   - When
	 *   - How
	 *   - Support
	 */
	sections: PropTypes.array.isRequired,
};


Sections.defaultProps = {};


export default Sections;
