import React from "react";

export default ( page ) => (
	<div className="uikit-body container textblock">
		<div className="textwrapper textblock__text">
			{ page._body }
		</div>
		{ page.quote && <blockquote className="textblock__quote">{ page.quote }</blockquote> }
	</div>
);
