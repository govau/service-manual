import PropTypes from 'prop-types';
import React from 'react';

/**
 * Footer layout
 */
const Footer = ( page ) => {

	const theme = page._pages[ page._ID ].theme ? page._pages[ page._ID ].theme : 'dark';

	console.log(page);

	return (
		<footer className={`uikit-grid uikit-body uikit-footer footer footer--${ theme }`} role="contentinfo">
			<div className="container">
				<div className="row">
					<div className="col-md-2">
						<img className="footer__logo" src={`/assets/img/coa${ theme === 'blue' || theme === 'dark' ? '-white' : '' }.png`}
							alt="The Australian Government coat of Arms" />
					</div>
					<div className="col-md-10">
						<div className="footer__links__wrapper">
							<ul className={`footer__links uikit-link-list uikit-link-list--inline uikit-link-list--inverted`}>
								{
									page.links && page.links.map( ( link, i ) => {
										return (
											<li key={ i } className="footer__listitem" >
												{
													page._pages[ link ]
														? <a href={ page._pages[ link ].url } className="footer__link">{ page._pages[ link ].title }</a>
														: <a href={ link[1] } className="footer__link">{ link[0] }</a>
												}
											</li>
										)
									})
								}
							</ul>
						</div>
						<div className="footer__text footer__text--small">
							{ page._body }
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}


Footer.propTypes = {
	/**
	 * links:
	 *   - page1 # this needs to be page IDs
	 *   - page2 # they are converted to titles later
	 *   - page2/nested
	 *   - content-strategy/content-auditing/prove-the-value
	 *   - content-strategy/content-auditing/plan-your-audit
	 */
	links: PropTypes.arrayOf( PropTypes.string ).isRequired,

	/**
	 * _body: (text)(2)
	 */
	_body: PropTypes.node.isRequired,
};


Footer.defaultProps = {};


export default Footer;
