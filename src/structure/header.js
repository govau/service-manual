// copied from govau/designsystem with some tweaks
// line 26, line 35
// change 'index' -> 'homepage'

import AUheader, { AUheaderBrand } from '../../scripts/uikit/header';
import AUskipLink          from '../../scripts/uikit/skip-link';
import React, { Fragment } from 'react';
import PropTypes           from 'prop-types';


/**
 * The header component
 */
const Header = ({ title, title_badge, mainmenu, header_govau, _relativeURL, _ID, _pages, _body }) => (
	<div>
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
		<AUheader dark>
		  <div class="container-fluid">
		    <div class="row">
		      <div class="col-md-9">
		        <AUheaderBrand
		          title="Digital Guides"
		          brandImage="/assets/img/header-logo-agov.png"
		          brandImageAlt="The Australian Government coat of Arms"
		        />
		      </div>
					<div className="col-md-3">
						<form autoComplete="off" action="/search" method="get">
							<input placeholder="Search" className="search__box" name="q" type="text" />
							<input type="submit" value="🔍" />
						</form>
					</div>
		    </div>
		  </div>
		</AUheader>
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
