import React from "react";

export default ( page ) => (
	<div className="uikit-body uikit-grid">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="textwrapper">{ page._body }</div>
				</div>
			</div>
		</div>
	</div>
);
