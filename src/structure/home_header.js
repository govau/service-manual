import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Category header component
 */

const Homeheader = ( page ) => {

	const theme = page._pages[ page._ID ].theme ? page._pages[ page._ID ].theme : 'dark';
	const breadcrumbs = [];

	return (
		<div className={`home__header header`} id="content">
			<div className="container">
				<div className="row">
					<div className="col-xs-12">

						<div className="header__subheader">
							<a href="/" title="Guides home">
								<img className="header__logo" src={`/assets/img/coa${ theme === 'blue' || theme === 'dark' ? '-white' : '' }.png`}
									alt="The Australian Government coat of Arms"/>
							</a>
						</div>

						<div className="textwrapper">
							<h1 className="header__title">
								{ page.title }
							</h1>

							<div className="header__description">
								{ page.description }
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

Homeheader.propTypes = {
	/**
	 * title: User research
	 */
	title: PropTypes.string.isRequired,

	/**
	 * description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
	 */
	description: PropTypes.string.isRequired,
};

Homeheader.defaultProps = {};


export default Homeheader;
