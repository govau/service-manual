import React from "react"
import PropTypes from 'prop-types'

import "./content.scss"

const Content = (props) => (
	<main>
		{ props.children }
	</main>
)

Content.propTypes = {
	children: PropTypes.node,
}

export default Content
