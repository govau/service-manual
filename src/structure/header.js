import AUheader, { AUheaderBrand } from '../../scripts/uikit/header';
import AUskipLink          from '../../scripts/uikit/skip-link';
import React, { Fragment } from 'react';
import PropTypes           from 'prop-types';


/**
 * The header component
 */
const Header = ({ title, title_badge, mainmenu, header_govau, _relativeURL, _ID, _pages, _body }) => (
	<div className="header-wrapper">
			<AUskipLink links={[
				{
					link: '#mainmenu',
					text: 'Skip to navigation',
				},
				{
					link: '#content',
					text: 'Skip to content',
				},
			]} />
			{ header_govau }
			<div className="header">
				<div id="focustrap-top"></div>

				<AUheader dark hero={ _ID === 'homepage' ? true : false }>
				  <div className="container-fluid">
				    <div className="row">
				      <div className="col-md-8">
				        <AUheaderBrand
				          title="Digital Guides"
				          brandImage="/assets/img/header-logo-agov.png"
				          brandImageAlt="The Australian Government coat of Arms"
				        />
				      </div>
				      <div className="col-md-4 search__headercontainer">
								<form className="search__searchbox" role="search" autoComplete="off" action="/search" method="get">
									<input type="text" className="au-text-input au-text-input--dark round--left" name="q" id="search-input" placeholder="Digital Guides"/>
									<button type="submit" className="au-btn au-btn--dark icon icon--search round--right" id="search-btn">Search</button>
								</form>
				      </div>
				    </div>
						<div className="row">
							<div className="col-xs-6">
								<button id="search-toggle"
												className="mainmenu-toggle au-btn au-btn--tertiary au-btn--dark au-btn--block icon au-accordion--closed"
												aria-controls="searchmenu"
												aria-expanded="false"
												aria-selected="false"
												role="tab">Open Search
								</button>
							</div>
							<div className="col-xs-6">
								<button id="mainmenu-toggle"
												className="mainmenu-toggle au-btn au-btn--tertiary au-btn--dark au-btn--block icon au-accordion--closed"
												aria-controls="mainmenu"
												aria-expanded="false"
												aria-selected="false"
												role="tab">Open menu
								</button>
							</div>
						</div>
				  </div>
				</AUheader>

				<div
					aria-hidden="false"
					id="searchmenu"
					tabIndex="-1"
					className="searchmenu au-body au-body--dark au-accordion__body au-accordion--closed">
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-12">
								<form className="search__searchbox" role="search" autoComplete="off" action="/search" method="get">
									<input type="text" className="au-text-input au-text-input--dark round--left" name="q" id="search-input" placeholder="Digital Guides"/>
									<button type="submit" className="au-btn au-btn--dark icon icon--search round--right" id="search-btn">Search</button>
								</form>
							</div>
						</div>
					</div>
				</div>

				<div
					aria-hidden="false"
					id="mainmenu"
					tabIndex="-1"
					className="mainmenu au-body au-body--dark au-accordion__body au-accordion--closed">
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-12">
								{ mainmenu }
							</div>
						</div>
					</div>
				</div>
				<div id="overlay" className="overlay"></div>
				<div id="focustrap-bottom"></div>


			</div>
		</div>
);

Header.propTypes = {
	/**
	 * title: Design System
	 */
	title: PropTypes.node.isRequired,
	/**
	 * title_badge: Beta
	 */
	title_badge: PropTypes.node,
};

Header.defaultProps = {};

export default Header;
