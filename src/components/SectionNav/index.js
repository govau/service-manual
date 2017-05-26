import React from "react"
import PropTypes from 'prop-types'

// Styles
import "./section-nav.scss"


/**
 * DEFAULT
 * The Section header anchor nav
 *
 * @param  {array}   contents    - Array or anchor titles and anchor links
 * @param  {object}  item        - Object or related anchor title and link
 * @param  {string}  item.title  - Title of anchor nav
 * @param  {string}  item.link   - Link of anchor nav
 */
const SectionNav = ( { contents } ) => (
	<section className="servicemanual-section-header">
		<ul>
			{ contents.map( ( item, i ) =>
				<li key={ i } className="dfdsfd">
					<a href={ item.link }>{ item.title }</a>
				</li>
			)}
		</ul>
	</section>
)

SectionNav.propTypes = {
  contents: PropTypes.array,
}

export default SectionNav
