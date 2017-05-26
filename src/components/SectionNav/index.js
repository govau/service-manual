import React from "react"
import PropTypes from 'prop-types'

// Styles
import "../../uikit/sass/link-list.scss"
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
	<nav className="servicemanual-section-nav">
		<div className="container">
			<h2 className="servicemanual-section-nav__title">Page navigation</h2>
			<ul className="uikit-link-list uikit-link-list--inline">
				{ contents.map( ( item, i ) =>
					<li key={ i } className="servicemanual-section-nav__item">
						<a href={ item.link }>{ item.title }</a>
					</li>
				)}
			</ul>
		</div>
	</nav>
)

SectionNav.propTypes = {
  contents: PropTypes.array,
}

export default SectionNav
