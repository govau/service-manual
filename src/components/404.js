import React from "react";
import { Navigation } from "./nav";

export default ( page ) => (
	<div className="uikit-body uikit-grid page404">
		<div className="container ">
			<div className="row">
				<div className="col-md-12">
					<div className="textwrapper">
						<div className="page404__text">{ page._body }</div>
						<Navigation nav={ page._nav } pages={ page._pages } ID={ page._ID } relativeURL={ page._relativeURL } />
					</div>
				</div>
			</div>
		</div>
	</div>
);
