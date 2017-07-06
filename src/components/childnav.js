import React from "react";
import { Navigation } from "./nav";

export default ({ page }) => {

	const theme = page._pages[ page._ID ].theme ? page._pages[ page._ID ].theme : 'dark';
	const parentID = page._parents[ 0 ];
	const childNavTitle = page.childnavtitle == undefined ? 'Default text' : page.childnavtitle;

	return (
		<div className={`childnav js-childnav childnav--${ theme }`}>
			<div className="childnav__container">
				<button className="childnav__controls">{ childNavTitle }</ button>
				<Navigation
					wrappingId="childnav-list"
					wrappingClass="childnav__list"
					noParents={ true }
					nav={ page._nav }
					pages={ page._pages }
					ID={ page._ID }
					startID={ parentID }
					relativeURL={ page._relativeURL }
				/>
			</div>
		</div>
	);
}
