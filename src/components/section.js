import React from 'react';
import PropTypes from 'prop-types';
import Slugify from 'slugify';

// UIKIT
export const InpageNavSection = ({ title, link, children, level, headingClass, sectionLink, sectionLinkOnClick }) => {
	const attributeOptions = {};

	if( typeof sectionLinkOnClick === 'function' ) {
		attributeOptions.onClick = sectionLinkOnClick;
	}

	const HeadingTag = `h${ level }`;

	return (
		<div>
			<HeadingTag className={ `uikit-inpage-nav-section ${ headingClass }` }>
				{ title }

				<a id={ link } className="uikit-inpage-nav-section-link" href={ `#${ link }` } { ...attributeOptions }>{ sectionLink }</a>
			</HeadingTag>

			{ children }
		</div>
	);
};

InpageNavSection.defaultProps = {
	level: '2',
	sectionLink: 'Link to section',
};



export default ( page ) => (
	<div className="uikit-body container sections">
		<InpageNavSection headingClass='display-3' title={ page.section } link={ Slugify( page.section ).toLowerCase() } />
	</div>
);
