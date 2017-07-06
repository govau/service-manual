import PropTypes from 'prop-types';
import Slugify from 'slugify';
import React from 'react';


/**
 * The section component
 */
const Section = ( page ) => (
	<div className="uikit-body uikit-grid category-section">
		<div className="container">
			<div className="row">
				<div className="col-md-12" id={ Slugify( page.section ).toLowerCase() }>
					<h3 className="category-section__section">{ page.section }</h3>
					<h4 className="category-section__headline display-3">{ page.title }</h4>
				</div>
			</div>
		</div>
	</div>
);


Section.propTypes = {
	/**
	 * section: Guides
	 */
	section: PropTypes.string.isRequired,

	/**
	 * title: Examples and case studies
	 */
	title: PropTypes.string.isRequired,
};


Section.defaultProps = {};


export default Section;
