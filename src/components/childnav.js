import React from "react";
import { Navigation } from "./nav";

export default ( { page } ) => {

	const theme = page._pages[ page._ID ].theme ? page._pages[ page._ID ].theme : 'dark';

	return (
		<div className={`childnav--${ theme }`}>
			<div className="childnav__container">
				<button className="childnav__controls" />
				<Navigation wrappingClass="childnav" noParents={true} nav={ page._nav } pages={ page._pages } ID={ page._ID } relativeURL={ page._relativeURL } />
			</div>
		</div>
	);
}
