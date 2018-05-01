import PropTypes from 'prop-types';
import React from 'react';
import AUaccordion from '../../scripts/uikit/accordion.js'

// LOCAL
import Navigation from './nav';


/**
 * Childnav for use in intro_with_nav
 *
 * @disable-docs
 *
 * The javascript event handlers are in /scripts/js/020-components/01-childnav.js
 */
const Childnav = ({ page }) => {

	const theme = page._pages[ page._ID ].theme ? page._pages[ page._ID ].theme : 'dark';
	const parentID = page._parents.filter( parent => parent !== 'index' )[ ( page._parents.length - ( page._parents.length - 1 ) )];
	const childNavTitle = page.childnavtitle == undefined ? 'In this category' : page.childnavtitle;
	const childnav1lvl = page.childnav1lvl ? page.childnav1lvl : page._pages[ page._ID ].childnav1lvl;

	return (

			<div className={`childnav js-childnav childnav--${ theme }`}>
				<div className="childnav__container">
					<a href="#childnav_button" id="childnav__button" className="au-btn au-accordion--closed">In this category </a>
					<AUaccordion open={ true } header="In this section" id="guides-childnav-accordion">
						<Navigation
							wrappingId="childnav-list"
							wrappingClass="childnav__list"
							noParents={ true }
							nav={ page._nav }
							pages={ page._pages }
							ID={ page._ID }
							childnav1lvl={ childnav1lvl }
							startID={ parentID }
							relativeURL={ page._relativeURL }
						/>
					</AUaccordion>
				</div>
			</div>

	);
}


Childnav.propTypes = {};


Childnav.defaultProps = {};


export default Childnav;
