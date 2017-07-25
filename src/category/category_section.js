import PropTypes from 'prop-types';
import Slugify from 'slugify';
import React from 'react';


/**
 * The section component
 */
const CategorySection = ( page ) => (
	<div className="uikit-body uikit-grid category-section">
		<div className="container">
			<div className="row">
				<div className="col-md-12" id={ Slugify( page.section ).toLowerCase() }>
					<span className="section__section category-section__section">{ page.section }</span>
					<h4 className="category-section__headline display-3">{ page.title }</h4>
				</div>
			</div>
		</div>
	</div>
);


CategorySection.propTypes = {
	/**
	 * section: Guides
	 */
	section: PropTypes.string.isRequired,

	/**
	 * title: Examples and case studies
	 */
	title: PropTypes.string.isRequired,
};


CategorySection.defaultProps = {};


export default CategorySection;
