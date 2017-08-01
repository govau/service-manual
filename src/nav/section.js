import PropTypes from 'prop-types';
import Slugify from 'slugify';
import React from 'react';

import { InpageNavSection } from '../../scripts/uikit/inpage-nav';


/**
 * The section component
 */
const Section = ( page ) => (
	<div className="uikit-body uikit-grid sections">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<InpageNavSection headingClass='display-3' title={ page.section } link={ Slugify( page.section ).toLowerCase() } children="" />
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
