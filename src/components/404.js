import React from "react";
import { Navigation } from "./nav";

export default ( page ) => (
	<div className="uikit-body container page404">
		<div className="textwrapper">
			<div className="page404__text">{ page._body }</div>
			<Navigation nav={ page._nav } pages={ page._pages } ID={ page._ID } relativeURL={ page._relativeURL } />
		</div>
	</div>
);
