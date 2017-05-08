import React, { PropTypes } from "react"
import Helmet from "react-helmet"

const DefaultHeadMeta = ( props, { metadata: { pkg } } ) => (
	<div hidden>
		<Helmet
			meta={ [
				{ property: "og:site_name", content: "Service Manual" },
				{ name: "twitter:site", content: `@${ pkg.twitter }` },
				...props.meta ? props.meta : [],
			] }
			script={ [
				...props.scripts ? props.scripts : [],
			] }
		/>

		{ /* meta viewport safari/chrome/edge */ }
		<Helmet
			meta={ [ {
				name: "viewport", content: "width=device-width, initial-scale=1",
			} ] }
		/>
		<style>{ "@-ms-viewport { width: device-width; }" }</style>
	</div>
)

DefaultHeadMeta.propTypes = {
	meta: React.PropTypes.arrayOf( React.PropTypes.object ),
	scripts: React.PropTypes.arrayOf( React.PropTypes.object ),
}

DefaultHeadMeta.contextTypes = {
	metadata: PropTypes.object.isRequired,
}

export default DefaultHeadMeta
