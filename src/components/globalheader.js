import React from "react";

const headerClasses = {
	light: 'globalheader--light',
	dark: 'globalheader--dark',
	white: 'globalheader--white',
	blue: 'globalheader--blue',
};

const headerContentClasses = {
	light: 'globalheader__content--light',
	dark: 'globalheader__content--dark',
	white: 'globalheader__content--white',
	blue: 'globalheader__content--blue',
};


export default ({ page }) => {
	const theme = page._pages[ page._ID ].theme ? page._pages[ page._ID ].theme : 'dark';

	return (
		<div>
			<div className={`uikit-grid globalheader ${ headerClasses[ theme ] }`}>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="globalheader__logo">
								<svg className="globalheader__logo__svg" role="img" title="The Commonwealth Star">
									<use xlinkHref={`/assets/svg/map.svg#${
										page._pages[ page._ID ].theme === 'light' || page._pages[ page._ID ].theme === 'white'
											? 'star-dark'
											: 'star'
										}`}/>
								</svg>
								<span className="globalheader__logo__title">GOV.AU</span>
							</div>
							{ page.text && <span className="globalheader__text">{ page.text }</span> }
							<a href="#global-header-content" className="globalheader__button js-globalheader">{ page.button }</a>
						</div>
					</div>
				</div>
			</div>

			<div id="global-header-content" className={`globalheader__content ${ headerContentClasses[ theme ] } `}>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="globalheader__content__wrapper">
								<div className="col-sm-2 col-md-2">
									<div className="globalheader__emblem__wrapper">
										<img className="globalheader__emblem" alt="" src="/assets/img/coa_dark@2x.png" />
									</div>
								</div>
								<div className="col-sm-4 col-md-4">
									<div className="globalheader__official">
										<span className="globalheader__title">{ page.title1 }</span>
										<span>{ page.content1 }</span>
									</div>
								</div>
								<div className="col-sm-2 col-md-2">
									<div className="globalheader__lock"></div>
								</div>
								<div className="col-sm-4 col-md-4">
									<div className={`globalheader__security`}>
										<span className="globalheader__title">{ page.title2 }</span>
										<span>{ page.content2 }</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
