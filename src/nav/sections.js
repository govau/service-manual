import PropTypes from 'prop-types';
import Slugify from 'slugify';
import React from 'react';

import { AUinpageNavLinksItem, AUinpageNavLinks } from '../../scripts/uikit/inpage-nav';


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
		<div className="au-body au-grid sections">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-offset-3 col-md-6 js-sections">
						<AUinpageNavLinks title="In this section" sections={ sections } title={ page.title } />
					</div>
				</div>
			</div>
		</div>
	);
};


Sections.propTypes = {
	/**
	 * title: Contents
	 */
	title: PropTypes.string,

	/**
	 * sections:
	 *   - First section
	 *   - Second section
	 *   - Even more sections
	 *   - Last section
	 */
	sections: PropTypes.array.isRequired,
};


Sections.defaultProps = {
	title: 'Contents',
};


export default Sections;
