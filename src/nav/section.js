import PropTypes from 'prop-types';
import Slugify from 'slugify';
import React from 'react';


// UIKIT
const InpageNavSection = ({ title, link, children, level, headingClass, sectionLink, sectionLinkOnClick }) => {
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



/**
 * The section component
 */
const Section = ( page ) => (
	<div className="uikit-body uikit-grid sections">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<InpageNavSection headingClass='display-3' title={ page.section } link={ Slugify( page.section ).toLowerCase() } />
				</div>
			</div>
		</div>
	</div>
);


Section.propTypes = {
	/**
	 * section: This important section
	 */
	section: PropTypes.string.isRequired,
};


Section.defaultProps = {};


export default Section;
