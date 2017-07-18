import PropTypes from 'prop-types';
import React from 'react';


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
	);
}

Categoryheader.propTypes = {};


Categoryheader.defaultProps = {};


export default Categoryheader;
