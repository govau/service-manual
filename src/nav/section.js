import PropTypes from 'prop-types';
import Slugify from 'slugify';
import React from 'react';

import { InpageNavSection } from '../../scripts/uikit/inpage-nav';


/**
 * The section component
 */
const Section = ( page ) => {

	const HeadingTag = `h${ page.level ? page.level : 2 }`;

	return (
		<div className="au-body au-grid sections">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-offset-3 col-md-6">
						<HeadingTag className="section__header" id={ Slugify( page.section ).toLowerCase() }>
							 { page.section }
						</HeadingTag>
						<br/>
					</div>
				</div>
			</div>
		</div>
	)};


Section.propTypes = {
	/**
	 * section: This important section
	 */
	section: PropTypes.string.isRequired,
};


Section.defaultProps = {
};

export default Section;
