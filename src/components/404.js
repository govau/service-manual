import React from "react";

export default ( page ) => (
	<div className="uikit-body container page404">
		<div className="textwrapper">
			<div className="page404__text">{ page._body }</div>
			<ul className="page404__list">
				{
					Object.keys( page._sites ).map( ( site, i ) => {
						if( site !== '404' ) {
							return (
								<li key={ i }>
									<a href={ `${ page._sites[ site ].url }` }>{ page._sites[ site ].title }</a>
								</li>
							)
						}
					})
				}
			</ul>
		</div>
	</div>
);
