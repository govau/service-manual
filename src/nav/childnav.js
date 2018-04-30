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
     return (<li className="guideschildnav__item"><a href={this.props.url}>{this.props.itemname}</a></li>)
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

	///////////////////////////////////////
	//
	// 		ORGANISE THE SIBLING DATA
	//
	///////////////////////////////////////

	var siblingkeys = Object.keys(siblings);
	var sibling_titles = [];

	for (var i = 0; i < siblingkeys.length; i++) {
		sibling_titles[i] = page._pages[ siblingkeys[i] ].pagetitle;
	}

	// sort the arrays by page title
	var templist = [];
	for (var j = 0; j < sibling_titles.length; j++)
    templist.push({'title': sibling_titles[j], 'id': siblingkeys[j]});

	templist.sort(function(a, b) {
    return ((a.title < b.title) ? -1 : ((a.title == b.title) ? 0 : 1));
	});

	for (var k = 0; k < templist.length; k++) {
    sibling_titles[k] = templist[k].title;
    siblingkeys[k] = templist[k].id;
	}


	///////////////////////////////////////
	//
	// 		ORGANISE THE CHILDREN DATA
	//
	///////////////////////////////////////

	var children = siblings[page._ID];
	var childrenkeys = Object.keys(children);
	var children_titles = [];

	for (var i = 0; i < childrenkeys.length; i++) {
		if (page._pages[ childrenkeys[i] ] != null) {
			children_titles[i] = page._pages[ childrenkeys[i] ].pagetitle;
		}
	}

	// sort the arrays by page title
	templist = [];
	for (var j = 0; j < children_titles.length; j++)
    templist.push({'title': children_titles[j], 'id': childrenkeys[j]});

	templist.sort(function(a, b) {
    return ((a.title < b.title) ? -1 : ((a.title == b.title) ? 0 : 1));
	});

	for (var k = 0; k < templist.length; k++) {
    children_titles[k] = templist[k].title;
    childrenkeys[k] = templist[k].id;
	}

	///////////////////////////////////////

	function hasChildren() {
		if (children_titles.length < 1) {
			return false;
		} else {
			return true;
		}
	}

	function printHasChildren() {
		if (hasChildren()) {
			return "Yes";
		} else {
			return "No";
		}
	}

	function makeChildrenList() {
		var rows = [];
		for (var i = 0; i < children_titles.length; i++) {
			rows.push(<NavListItem url={makeUrl(childrenkeys[i])} itemname={children_titles[i]} />)
		}

		return <ul>{rows}</ul>;
	}

	function makeUrl(pageid) {
		return "/" + pageid;
	}

	function makeMenuList(){
		var rows = [];
		for (var i = 0; i < sibling_titles.length; i++) {
			if (sibling_titles[i] == pageTitle) {
				rows.push(<NavListItem url={makeUrl(siblingkeys[i])} itemname={sibling_titles[i]} />);
				if (hasChildren()) { rows.push(makeChildrenList()); }
			} else {
				rows.push(<NavListItem url={makeUrl(siblingkeys[i])} itemname={sibling_titles[i]} />);
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

						<h3 className="childnav__debug">page._ID</h3>
						<pre className="childnav__debug">{page._ID}</pre>

						<h3 className="childnav__debug">siblings_keys:</h3>
						<pre className="childnav__debug">{JSON.stringify(siblingkeys,null,3)}</pre>

						<h3 className="childnav__debug">sibling_titles</h3>
						<pre className="childnav__debug">{JSON.stringify(sibling_titles,null,3)}</pre>

						<h3 className="childnav__debug">has children?</h3>
						<pre className="childnav__debug">{printHasChildren()}</pre>

						<h3 className="childnav__debug">children</h3>
						<pre className="childnav__debug">{JSON.stringify(children,null,3)}</pre>

						<h3 className="childnav__debug">children_titles</h3>
						<pre className="childnav__debug">{JSON.stringify(children_titles,null,3)}</pre>

					</AUaccordion>
				</div>
			</div>

	);
}


Childnav.propTypes = {};


Childnav.defaultProps = {};


export default Childnav;
