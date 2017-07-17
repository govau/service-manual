import PropTypes from 'prop-types';
import React from 'react';


// LOCAL
import GlobalHeader from '../structure/globalheader';


/**
 * The Category header component
 */
 const LinkListItem = ({ item }) => {
	const attributeOptions = {};

	if( typeof item.onClick === 'function' ) {
		attributeOptions.onClick = item.onClick;

		// if we find an onClick event but no link we make it a link so onClick can be added (no button support yet)
		if( !item.link ) {
			item.link = '#';
		}
	}

	return (
		<li>
			{ item.link === undefined
				? ( item.text )
				: ( <a href={ item.link } { ...attributeOptions }>{ item.text }</a> )
			}
		</li>
	);
 };

const LinkList = ({ inverted, inline, items }) => (
	<ul className={ `uikit-link-list${ inverted ? ' uikit-link-list--inverted' : '' }${ inline ? ' uikit-link-list--inline' : '' }` }>
		{ items.map( ( item, i ) => <LinkListItem key={ i } item={ item } /> ) }
	</ul>
);

const Breadcrumbs = ({ inverted, label, items }) =>	(
	<nav className={ `uikit-breadcrumbs${ inverted ? ' uikit-breadcrumbs--inverted' : '' }` } aria-label={ label }>
		<LinkList inverted={ inverted } inline items={ items } />
	</nav>
);

const Categoryheader = ( page ) => {

	const theme = page._pages[ page._ID ].theme ? page._pages[ page._ID ].theme : 'dark';
	const breadcrumbs = [];

	page._parents.map( ( parent ) => breadcrumbs.push({
		link: ( page._pages[ parent ].url === page._pages[ page._ID ].url ? undefined : page._pages[ parent ].url ),
		text: page._pages[ parent ].title,
	}));

	return (
		<header className="uikit-body uikit-grid">

			<GlobalHeader page={ page } />

			<div className={`category__header category__header--${ theme } header`}>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="header__subheader">
								<img className="header__logo" src={`/assets/img/coa${ theme === 'blue' || theme === 'dark' ? '-white' : '' }.png`} />
								<div className="header__text">
									<strong className="header__text__headline">
										{
											page._pages[ page._ID ]['header-title']
												? page._pages[ page._ID ]['header-title']
												: 'Service Manual'
										}
									</strong>

										{
											breadcrumbs.length > 1
												? <Breadcrumbs label="Breadcrumb for this page" items={ breadcrumbs } inverted={ theme === 'blue' || theme === 'dark' } />
												: null
										}
								</div>

								<div className="header__menu">
									<span className="menu">Menu</span>
								</div>
							</div>

							<div className="textwrapper">
								<div className="header__title">
									{ page.title }
								</div>

								<div className="header__description">
									{ page.description }
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

Categoryheader.propTypes = {
	/**
	 * title:  User research
	 */
	title: PropTypes.string.isRequired,

	/**
	 * description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
	 */
	description: PropTypes.string.isRequired,

	/**
	 * button: An official website
	 */
	button: PropTypes.string.isRequired,

	/**
	 * title1: The .gov.au means its official
	 */
	title1: PropTypes.string.isRequired,

	/**
	 * content1: Lorem ipsum dolor sit amet, vix civibus deserunt te, sit eu nulla discere consulatu, ei graeci consectetuer has.
	 */
	content1: PropTypes.string.isRequired,

	/**
	 * title2: This site is also protected by SSL
	 */
	title2: PropTypes.string.isRequired,

	/**
	 * content2: Lorem ipsum dolor sit amet, vix civibus deserunt te, sit eu nulla discere consulatu, ei graeci consectetuer has.
	 */
	content2: PropTypes.string.isRequired,
};


Categoryheader.defaultProps = {};


export default Categoryheader;
