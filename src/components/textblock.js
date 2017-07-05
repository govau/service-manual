import React from "react";

export default ( page ) => (
	<div className="uikit-body uikit-grid textblock">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="textwrapper textblock__text">
						{ page._body }
					</div>
					{ page.quote && <blockquote className="textblock__quote">{ page.quote }</blockquote> }
				</div>
			</div>
		</div>
	</div>
);
