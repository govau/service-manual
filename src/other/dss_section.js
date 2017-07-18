import PropTypes from 'prop-types';
import Slugify from 'slugify';
import React from 'react';


const CRITERIA = {
	'1': {
		title: `Understand user needs`,
		link: `https://www.dta.gov.au/standard/1-user-needs/`,
	},
	'2': {
		title: `Have a multidisciplinary team`,
		link: `https://www.dta.gov.au/standard/2-multidisciplinary-team/`,
	},
	'3': {
		title: `Agile and user-centred process`,
		link: `https://www.dta.gov.au/standard/3-agile-and-user-centred/`,
	},
	'4': {
		title: `Understand tools and systems`,
		link: `https://www.dta.gov.au/standard/4-tools-and-systems/`,
	},
	'5': {
		title: `Make it secure`,
		link: `https://www.dta.gov.au/standard/5-make-it-secure/`,
	},
	'6': {
		title: `Consistent and responsive design`,
		link: `https://www.dta.gov.au/standard/6-consistent-and-responsive/`,
	},
	'7': {
		title: `Use open standards and common platforms`,
		link: `https://www.dta.gov.au/standard/7-open-standards-and-common-platforms/`,
	},
	'8': {
		title: `Make source code open`,
		link: `https://www.dta.gov.au/standard/8-make-source-code-open/`,
	},
	'9': {
		title: `Make it accessible`,
		link: `https://www.dta.gov.au/standard/9-make-it-accessible/`,
	},
	'10': {
		title: `Test the service`,
		link: `https://www.dta.gov.au/standard/10-test-the-service/`,
	},
	'11': {
		title: `Measure performance`,
		link: `https://www.dta.gov.au/standard/11-measure-performance/`,
	},
	'12': {
		title: `Don’t forget the non-digital experience`,
		link: `https://www.dta.gov.au/standard/12-non-digital-experience/`,
	},
	'13': {
		title: `Encourage everyone to use the digital service`,
		link: `https://www.dta.gov.au/standard/13-encourage-use-of-the-digital-service/`,
	},
};


/**
 * The section component
 */
const DSSSection = ( page ) => (
	<div className="uikit-body uikit-grid dss-section">
		<div className="container">
			<div className="row">
				<div className="col-md-12" id={ Slugify( page.section ).toLowerCase() }>
					<div className="dss-section__criteria">
						<strong className="dss-section__criteria__headline">Digital Service Standard</strong>
						<ul className="dss-section__criteria__list">
							{
								page.dss.map( ( criteria, i ) => (
									<li key={ i } className="dss-section__criteria__list__item">
										<span className="dss-section__criteria__list__item__digit">{ criteria }</span>
										<a className="dss-section__criteria__list__item__link" href={ CRITERIA[ criteria ].link } rel="external">{ CRITERIA[ criteria ].title }</a>
									</li>
								))
							}
						</ul>
						<a className="dss-section__criteria__cta uikit-cta-link" href="https://www.dta.gov.au/standard/">Read the Criteria</a>
					</div>
					<span className="section__section dss-section__section">{ page.section }</span>
					<div className="dss-section__text">{ page._body }</div>
				</div>
			</div>
		</div>
	</div>
);


DSSSection.propTypes = {
	/**
	 * dss:
	 *   - 1
	 *   - 3
	 *   - 8
	 *   - 13
	 */
	dss: PropTypes.arrayOf(
		PropTypes.oneOf([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ])
	).isRequired,

	/**
	 * section: Guides
	 */
	section: PropTypes.string.isRequired,

	/**
	 * _body: (text)(7)
	 */
	_body: PropTypes.node.isRequired,
};


DSSSection.defaultProps = {};


export default DSSSection;
