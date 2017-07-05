import React from "react";

export default ( page ) => (
	<div className="uikit-body uikit-grid quote">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<blockquote>
						<div className="textwrapper">
							<div className="quote__text">{ page.quote }</div>
							{ page.by && <cite className="quote__by">{ page.by }</cite> }
						</div>
					</blockquote>
				</div>
			</div>
		</div>
	</div>
);
