import React from "react";
import Childnav from "./childnav";

export default ( page ) => {

	const theme = page._pages[ page._ID ].theme ? page._pages[ page._ID ].theme : 'dark';

	return (
		<div className={`uikit-body uikit-grid intro intro--${ theme }`}>
			<div className="container">
				<div className="row">
					<div className="col-md-12">

						<h1 className="intro__headline">{ page.title ? page.title : page._pages[ page._ID ].title }</h1>
						<Childnav page={ page } />

						<div className="textwrapper">
							{ page.category && <span className="intro__category">{ page.category }</span> }
							{ page.subtitle && <p className="intro__subtitle">{ page.subtitle }</p> }
							<div className="intro__text">{ page._body }</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	);
}
