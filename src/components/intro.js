import React from "react";

export default ( page ) => {
	const theme = page._sites[ page._myself ].theme ? page._sites[ page._myself ].theme : 'dark';

	return (
		<div className={`uikit-body intro intro--${ theme }`}>
			<div className="container">
				<div className="textwrapper">
					{ page.category && <span className="intro__category">{ page.category }</span> }
					<h1 className="intro__headline">{ page.title ? page.title : page._sites[ page._myself ].title }</h1>
					{ page.subtitle && <p className="intro__subtitle">{ page.subtitle }</p> }
					<div className="intro__text">{ page._body }</div>
				</div>
			</div>
		</div>
	);
}
