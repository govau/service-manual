import React from "react";

export default ( page ) => (
	<blockquote className="uikit-body container quote">
		<div className="textwrapper">
			<div className="quote__text">{ page.quote }</div>
			{ page.by && <cite className="quote__by">{ page.by }</cite> }
		</div>
	</blockquote>
);
