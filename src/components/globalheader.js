import React from "react";

const headerClasses = {
	light: 'globalheader--light',
	dark: 'globalheader--dark',
	white: 'globalheader--white',
	blue: 'globalheader--blue',
};

export default ({ page }) => {
	const theme = page._sites[ page._myself ].theme ? page._sites[ page._myself ].theme : 'dark';

	return (
		<div className={`globalheader ${ headerClasses[ theme ] }`}>
			<div className="container">
				<div className="globalheader__logo">
					<svg className="globalheader__logo__svg" role="img" title="The Commonwealth Star">
						<use xlinkHref={`/assets/svg/map.svg#${
							page._sites[ page._myself ].theme === 'light' || page._sites[ page._myself ].theme === 'white'
								? 'star-dark'
								: 'star'
							}`}/>
					</svg>
					<span className="globalheader__logo__title">GOV.AU</span>
				</div>
				{ page.text && <span className="globalheader__text">{ page.text }</span> }

				<a href="#global-header-content" className="globalheader__button js-globalheader">{ page.button }</a>
				<div id="global-header-content" className="globalheader__content">
					<div className="globalheader__content__wrapper">{ page._body }</div>
				</div>
			</div>
		</div>
	);
}
