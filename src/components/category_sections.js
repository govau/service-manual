import PropTypes from 'prop-types';
import Slugify from 'slugify';
import React from 'react';


/**
 * The sections component
 */
const CategorySections = ( page ) => {
	const sections = [];

	page.sections.map( ( section ) => sections.push({
		link: Slugify( section ).toLowerCase(),
		title: section,
	}));

	return (
		<div className="uikit-body uikit-grid category-sections">
			<div className="container">
				<div className="row">
					<div className="col-md-12 js-sections">
						<ul className="category-sections__list">
							{
								page.sections.map( ( section, i ) => (
									<div className="category-sections__list__item__wrapper">
										<li key={ i } className="category-sections__list__item">
											<a className="category-sections__list__link" href={`#${ Slugify( section ).toLowerCase() }`}>{ section }</a>
										</li>{ ' ' }
									</div>
								))
							}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};


CategorySections.propTypes = {
	/**
	 * sections:
	 *   - Why
	 *   - When
	 *   - How
	 *   - Support
	 */
	sections: PropTypes.array.isRequired,
};


CategorySections.defaultProps = {};


export default CategorySections;
