import React from "react";
import PropTypes from 'prop-types';
import GlobalHeader from "./globalheader";


// UIKIT
export const LinkListItem = ({ item }) => {
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

const Breadcrumbs = ({ inverted, label, items }) => (
	<nav className={ `uikit-breadcrumbs${ inverted ? ' uikit-breadcrumbs--inverted' : '' }` } aria-label={ label }>
		<LinkList inverted={ inverted } inline items={ items } />
	</nav>
);

const LinkList = ({ inverted, inline, items }) => (
	<ul className={ `uikit-link-list${ inverted ? ' uikit-link-list--inverted' : '' }${ inline ? ' uikit-link-list--inline' : '' }` }>
		{ items.map( ( item, i ) => <LinkListItem key={ i } item={ item } /> ) }
	</ul>
);



export default ( page ) => {
	const breadcrumbs = [];

	page._parents.map( ( parent ) => breadcrumbs.push({
		link: ( page._sites[ parent ].url === page._sites[ page._myself ].url ? undefined : page._sites[ parent ].url ),
		text: page._sites[ parent ].title,
	}));

	const theme = page._sites[ page._myself ].theme ? page._sites[ page._myself ].theme : 'dark';

	return (
		<header className="uikit-body">
			<GlobalHeader page={ page } />

			<div className={`header header--${ theme }`}>
				<div className="container">
					<img className="header__logo" src={`/assets/img/coa${ theme === 'blue' || theme === 'dark' ? '-white' : '' }.png`} />
					<div className="header__text">
						<strong className="header__text__headline">
							{
								page._sites[ page._myself ]['header-title']
									? page._sites[ page._myself ]['header-title']
									: 'Service Manual'
							}
						</strong>
						{
							breadcrumbs.length > 1
								? <Breadcrumbs label="Breadcrumb for this page" items={ breadcrumbs } inverted={ theme === 'blue' || theme === 'dark' } />
								: null
						}
					</div>
				</div>
			</div>
		</header>
	);
}
