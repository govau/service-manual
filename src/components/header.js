import React from "react";

export default ( page ) => (
	<header className={`globalheader uikit-body${ page._sites[ page._myself ].theme === 'light' ? ' globalheader--light' : ' globalheader--dark' }`}>
		<div className="globalheader__logo">
			<svg className="globalheader__logo__svg" role="img" title="The Commonwealth Star">
				<use xlinkHref={`/assets/svg/map.svg#${ page._sites[ page._myself ].theme === 'light' ? 'star-dark' : 'star' }`}/>
			</svg>
			<span className="globalheader__logo__title">GOV.AU</span>
		</div>
		<span className="globalheader__text">{ page.text }</span>

		<a href="#global-header-content" className="globalheader__button js-globalheader">{ page.button }</a>
		<div id="global-header-content" className="globalheader__content">
			<div className="globalheader__content__wrapper">{ page._body }</div>
		</div>
	</header>
);
