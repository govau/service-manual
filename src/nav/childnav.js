import PropTypes from 'prop-types';
import React from 'react';
import AUaccordion from '../../scripts/uikit/accordion.js'

/**
 * Childnav for use in intro_with_nav
 *
 * @disable-docs
 *
 * The javascript event handlers are in /scripts/js/020-components/01-childnav.js
 */

 class NavListItem extends React.Component {

   render(){
     return (<li>{this.props.itemname}</li>)
   }
 }

const Childnav = ({ page }) => {

	// const parentID = page._parents.filter( parent => parent !== 'index' )[ ( page._parents.length - ( page._parents.length - 1 ) )];
	const pageTitle = page._pages[ page._ID ].pagetitle;
	const pages = JSON.stringify(page._pages,null,3);
	const parents = JSON.stringify(page._parents,null,3);
	var siblings;
	var secondLevelParent;
	var thirdLevelParent;
	var fourthLevelParent;

	if (page._parents.length == 3) {
		secondLevelParent = page._parents[1];
		siblings = page._nav.homepage[secondLevelParent];
	}

	if (page._parents.length == 4) {
		secondLevelParent = page._parents[1];
		thirdLevelParent = page._parents[2];
		siblings = page._nav.homepage[secondLevelParent][thirdLevelParent];
	}

	if (page._parents.length == 5) {
		secondLevelParent = page._parents[1];
		thirdLevelParent = page._parents[2];
		fourthLevelParent = page._parents[3];
		siblings = page._nav.homepage[secondLevelParent][thirdLevelParent][fourthLevelParent];
	}

	var siblingkeys = Object.keys(siblings);
	var sibling_titles = [];

	for (var i = 0; i < siblingkeys.length; i++) {
		sibling_titles[i] = page._pages[ siblingkeys[i] ].pagetitle;
	}

	var children = siblings[page._ID];
	var childrenkeys = Object.keys(children);
	var children_titles = [];

	for (var i = 0; i < childrenkeys.length; i++) {
		if (page._pages[ childrenkeys[i] ] != null) {
			children_titles[i] = page._pages[ childrenkeys[i] ].pagetitle;
		}
	}

	function hasChildren() {
		if (children[0] == page._ID) {
			return true;
		} else {
			return false;
		}
	}

	function makeChildrenList() {
		var rows = [];
		for (var i = 0; i < children_titles.length; i++) {
			rows.push(<NavListItem itemname={children_titles[i]} />)
		}

		return <ul>{rows}</ul>;
	}

	function makeMenuList(){
		var rows = [];
		for (var i = 0; i < sibling_titles.length; i++) {
			if (sibling_titles[i] == pageTitle) {
				rows.push(<NavListItem itemname={sibling_titles[i]} />);
				if (hasChildren()) { rows.push(makeChildrenList()); }
			} else {
				rows.push(<NavListItem itemname={sibling_titles[i]} />);
			}
		}
		return <ul>{rows}</ul>;
	}


	return (

			<div className="childnav">
				<div className="childnav__container">
					<a href="#childnav_button" id="childnav__button" className="au-btn au-accordion--closed">In this category </a>
					<AUaccordion open={ false } header="In this section" id="guides-childnav-accordion">

							{makeMenuList()}

						<h3>page._ID</h3>
						<pre>{page._ID}</pre>

						<h3>siblings:</h3>
						<pre>{JSON.stringify(siblingkeys,null,3)}</pre>

						<h3>siblings</h3>
						<pre>{JSON.stringify(siblings,null,3)}</pre>

						<h3>children</h3>
						<pre>{JSON.stringify(children,null,3)}</pre>

					</AUaccordion>
				</div>
			</div>

	);
}


Childnav.propTypes = {};


Childnav.defaultProps = {};


export default Childnav;
