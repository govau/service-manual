import React from "react"
import PropTypes from 'prop-types'

// Styles
import "./related-criteria.scss"


/**
 * DEFAULT
 * The DSS related criteria block
 *
 * @param  {array}   contents    - Array or related DSS criteria by number ( 1 - 13 )
 *
 */
const RelatedCriteria = ( { contents } ) => {

	const DSSURL = 'https://www.dta.gov.au/standard/'

	const Criteria = [
		{
			'title': '1. Understand user needs',
			'link': DSSURL+'1-user-needs/',
		},
		{
			'title': '2. Have a multidisciplinary team',
			'link': DSSURL+'2-multidisciplinary-team/',
		},
		{
			'title': '3. Agile and user-centred process',
			'link': DSSURL+'3-agile-and-user-centred/',
		},
		{
			'title': '4. Understand tools and systems',
			'link': DSSURL+'4-tools-and-systems/',
		},
		{
			'title': '5. Make it secure',
			'link': DSSURL+'5-make-it-secure/',
		},
		{
			'title': '6. Consistent and responsive design',
			'link': DSSURL+'6-consistent-and-responsive/',
		},
		{
			'title': '7. Use open standards and common platforms',
			'link': DSSURL+'7-open-standards-and-common-platforms/',
		},
		{
			'title': '8. Make source code open',
			'link': DSSURL+'8-make-source-code-open/',
		},
		{
			'title': '9. Make it accessible',
			'link': DSSURL+'9-make-it-accessible/',
		},
		{
			'title': '10. Test the service',
			'link': DSSURL+'10-test-the-service/',
		},
		{
			'title': '11. Measure performance',
			'link': DSSURL+'11-measure-performance/',
		},
		{
			'title': '12. Don’t forget the non-digital experience',
			'link': DSSURL+'12-non-digital-experience/',
		},
		{
			'title': '13. Encourage everyone to use the digital service',
			'link': DSSURL+'13-encourage-use-of-the-digital-service/',
		},
	]

	return (
		<section className="servicemanual-related-criteria">
			<div className="servicemanual-related-criteria__body">
				<h2 className="servicemanual-related-criteria__title">Digital Service Standard</h2>

				<ul className="servicemanual-related-criteria__list">
					{ contents.map( ( item, i ) =>
							<li className="servicemanual-related-criteria__item" key={i}>
								<a href={Criteria[ ( item -1 ) ].link}>
									{Criteria[ ( item -1 ) ].title}
								</a>
							</li>
					)}
				</ul>
			</div>

			<div className="servicemanual-related-criteria__footer">
				<a href={DSSURL}>Read the Standard</a>
			</div>

		</section>
	)
}

RelatedCriteria.propTypes = {
  contents: PropTypes.array,
}

export default RelatedCriteria
