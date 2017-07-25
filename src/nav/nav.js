import PropTypes from 'prop-types';
import React from 'react';


/**
 * Navigation for use in other components
 *
 * @disable-docs
 */
const Navigation = ({
	nav = {},
	pages = {},
	ID = '',
	startID = '',
	relativeURL = ( URL ) => URL,
	noParents = false,
	level = 0,
	wrappingId = '',
	wrappingClass = 'navigation',
	itemClass = 'navigation__item',
	nestedItemClass = 'navigation__item--has-nested',
	levelClass = 'navigation--level-',
	ancorClass = 'navigation__item__anchor',
	spanClass = 'navigation__item__span',
	noanchorClass = 'navigation__item--noanchor',
}) => (

	<ul { ...( wrappingId && { id: wrappingId } ) } className={`${ wrappingClass } ${ levelClass }${ level }`}>
		{
			Object.keys( nav )
				.filter( ( key ) => pages[ key ].hidden === undefined || pages[ key ].hidden === false ) // hiding pages that have hidden set to not false
				.sort( ( keyA, keyB ) => pages[ keyA ].weight - pages[ keyB ].weight )                   // sort by weight
				.map( ( pageID, i ) => {
					const homepage = Object.keys( nav )[ 0 ];
					const page = nav[ pageID ];
					const _displayItem = noParents && pageID.startsWith( startID ) || !noParents;

					if( typeof page === 'object' ) {
						<li>
							noParents: { noParents }
							pageID: { pageID }
							homepage: { homepage }
						</li>

						if( _displayItem || noParents && pageID === homepage || !noParents ) {
							return <li className={`${ itemClass } ${ nestedItemClass }`} key={ i }>
								{
									_displayItem
										? <NavigationItem
												href={ relativeURL( pages[ pageID ].url, ID ) }
												title={ pages[ pageID ].title }
												thisPage={ pageID === ID }
												itemClass={ itemClass }
												ancorClass={ ancorClass }
												spanClass={ spanClass }
											/>
										: null
								}

								<Navigation
									nav={ page }
									pages={ pages }
									ID={ ID }
									startID={ startID }
									relativeURL={ relativeURL }
									noParents={ noParents }
									level={ level + 1 }
									wrappingClass={ wrappingClass }
									itemClass={ itemClass }
									nestedItemClass={ nestedItemClass }
									levelClass={ levelClass }
									ancorClass={ ancorClass }
									spanClass={ spanClass }
									noanchorClass={ noanchorClass }
								/>
							</li>
						}
					}
					else {
						if( _displayItem ) {
							return <li className={ itemClass } key={ i }>
								<NavigationItem
									href={ relativeURL( pages[ page ].url, ID ) }
									title={ pages[ page ].title }
									thisPage={ page === ID }
									itemClass={ itemClass }
									ancorClass={ ancorClass }
									spanClass={ spanClass }
								/>
							</li>
						}
					}
			})
		}
	</ul>
);


const NavigationItem = ({ itemClass, ancorClass, spanClass, href, title, thisPage }) => {
	if( thisPage ) {
		return <span className={ spanClass }>{ title }</span>;
	}
	else {
		return <a className={ ancorClass } href={ href }>{ title }</a>
	}
};


export default Navigation;
