import React from "react";
import { Navigation } from "./nav";

export default ( { page } ) => {

	const theme = page._pages[ page._ID ].theme ? page._pages[ page._ID ].theme : 'dark';
	const parentID = page._ID.split( '/' )[0];
	let childNavTitle;
	page.childnavtitle == undefined ? childNavTitle = 'Default text' : childNavTitle = page.childnavtitle;

	return (
		<div className={`js-childnav childnav--${ theme }`}>
			<div className="childnav__container">
				<button className="childnav__controls">{ childNavTitle }</ button>
				<Navigation wrappingId="childnav-list" wrappingClass="childnav__list" noParents={true} nav={ page._nav } pages={ page._pages } ID={ parentID } relativeURL={ page._relativeURL } />
			</div>
		</div>
	);
}
