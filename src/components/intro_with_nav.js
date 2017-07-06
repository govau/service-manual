import React from "react";
import Childnav from "./childnav";

export default ( page ) => {

	const theme = page._pages[ page._ID ].theme ? page._pages[ page._ID ].theme : 'dark';

	return (
		<div className={`uikit-body uikit-grid intro intro--withnav intro__wrapper intro--${ theme }`}>
			<div className="container">
				<div className="row">
					<div className="col-md-12">

						<div className="textwrapper intro__textwrapper__withnav">
							<h1 className="intro__headline">{ page.title ? page.title : page._pages[ page._ID ].title }</h1>
						</div>

						{ page && <Childnav page={ page } /> }

						<div className="textwrapper intro__textwrapper__withnav">
							<div className="intro__text">{ page._body }</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	);
}
