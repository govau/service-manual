import PropTypes from 'prop-types';
import React from 'react';
import AUaccordion from '../../scripts/uikit/accordion.js'

/**
 * Childnav: A navigation that shows the Siblings and Children
 *
 * @disable-docs
 *
 * The javascript event handlers are in /scripts/js/020-components/01-childnav.js
 */

 function makeUrlFromCuttlebelleId(pageid) {
	 if (pageid == "index") {
		 return "/";
	 } else {
		 return "/" + pageid;
	 }
 }

// basic single <li> item
class NavListItem extends React.Component {

	render(){
		return (
		<li><a href={this.props.url}>{this.props.itemname}</a></li>
		);
 	}
}

// an <li> element with nested <ul> inside
// e.g.
// <li>Honda
// 	<ul>
// 		<li>Accord</li>
// 		<li>Civic</li>
// 	</ul>
// </li>

class NavListNestedItem extends React.Component {

  render(){
		var rows = [];
		for (var i = 0; i < this.props.titles.length; i++) {
			if (this.props.titles[i] == "HIDDEN") {
				continue;
			}
			rows.push(<NavListItem
									itemname={this.props.titles[i]}
									url={makeUrlFromCuttlebelleId(this.props.ids[i])}
									key={Math.random()}
								/>);
		}

		return(
			<li className="active" key={Math.random()}><a href="">{this.props.itemname}</a>
				<ul key={Math.random()}>
					{rows}
				</ul>
			</li>
		)
  }
}

// form <li> elements of the current page's children
// only for Top-level pages (2nd level)
class TopLevelListItems extends React.Component {

  render(){
		var rows = [];
		for (var i = 0; i < this.props.titles.length; i++) {
			if (this.props.titles[i] == "HIDDEN") {
				continue;
			}
			rows.push(<NavListItem
									itemname={this.props.titles[i]}
									url={makeUrlFromCuttlebelleId(this.props.ids[i])}
									key={Math.random()}
								/>);
		}

		return rows;

  }
}

const Childnav = ({ page }) => {

	if (!page._pages[ page._ID ].pagetitle) {
		return null;
	}

	const pageTitle = page._pages[ page._ID ].pagetitle;
	const pages = JSON.stringify(page._pages,null,3);
	const parents = page._parents;
	const parent_id = page._parents[page._parents.length - 2];
	var parent_title;

	if (parent_id == "index") {
		parent_title = "Home";
	} else {
		parent_title = page._pages[ parent_id ].pagetitle;
	}

	var siblings;
	var secondLevelParent;
	var thirdLevelParent;
	var fourthLevelParent;
	var isTopLevelPage = false;

	// 2nd level page (eg guides.service.gov.au/content-strategy/)
	if (page._parents.length == 2) {
		siblings = page._nav.homepage;
		isTopLevelPage = true;
	}

	// 3rd level page (eg guides.service.gov.au/content-strategy/cms/)
	if (page._parents.length == 3) {
		secondLevelParent = page._parents[1];
		siblings = page._nav.homepage[secondLevelParent];
	}

	// 4th level page (eg guides.service.gov.au/content-strategy/cms/choose-a-cms/)
	if (page._parents.length == 4) {
		secondLevelParent = page._parents[1];
		thirdLevelParent = page._parents[2];
		siblings = page._nav.homepage[secondLevelParent][thirdLevelParent];
	}

// 5th level page (eg guides.service.gov.au/content-strategy/cms/choose-a-cms/how-to-evaluate/)
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
	var sibling_weights = [];

	// get the page titles from the list of id's (keys)
	for (var i = 0; i < siblingkeys.length; i++) {
		sibling_titles[i] = page._pages[ siblingkeys[i] ].pagetitle;
	}

	// get the page weights from the list of id's (keys)
	for (var i = 0; i < siblingkeys.length; i++) {
		sibling_weights[i] = page._pages[ siblingkeys[i] ].weight;
	}

	// sort the arrays by page weight
	var templist = [];
	for (var j = 0; j < sibling_titles.length; j++)
    templist.push({'title': sibling_titles[j], 'id': siblingkeys[j], 'weight': sibling_weights[j]});

	templist.sort(function(a, b) {
    return ((a.weight < b.weight) ? -1 : ((a.weight == b.weight) ? 0 : 1));
	});

	for (var k = 0; k < templist.length; k++) {
    sibling_titles[k] = templist[k].title;
    siblingkeys[k] = templist[k].id;
		sibling_weights[k] = templist[k].weight;
	}


	///////////////////////////////////////
	//
	// 		ORGANISE THE CHILDREN DATA
	//
	///////////////////////////////////////

	var children = siblings[page._ID];
	var childrenkeys = Object.keys(children);
	var children_titles = [];
	var children_weights = [];

	// get the page titles from the list of id's (keys)
	// only if there are children.
	for (var i = 0; i < childrenkeys.length; i++) {
		if (page._pages[ childrenkeys[i] ] != null) {
			if (page._pages[ childrenkeys[i] ].hidden) {
				children_titles[i] = "HIDDEN";
			} else {
				children_titles[i] = page._pages[ childrenkeys[i] ].pagetitle;
			}
		}
	}

	// sort the arrays by page title
	templist = [];

	// get the page weights from the list of id's (keys)
	for (var i = 0; i < children_titles.length; i++) {
		children_weights[i] = page._pages[ childrenkeys[i] ].weight;
	}

	// sort by weight
	for (var j = 0; j < children_titles.length; j++)
		templist.push({'title': children_titles[j], 'id': childrenkeys[j], 'weight': children_weights[j]});

	templist.sort(function(a, b) {
    return ((a.weight < b.weight) ? -1 : ((a.weight == b.weight) ? 0 : 1));
	});

	for (var k = 0; k < templist.length; k++) {
    children_titles[k] = templist[k].title;
    childrenkeys[k] = templist[k].id;
		children_weights[k] = templist[k].weight;
	}


	///////////////////////////////////////
	//
	// 		HELPERS
	//
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

	///////////////////////////////////////
	//
	// 		HTML CREATORS
	//
	///////////////////////////////////////

	function makeTopNavLink() {
		if (!isTopLevelPage) {
			return (
				<h2 className="au-sidenav--title"><a href={makeUrlFromCuttlebelleId(parent_id)}>{parent_title}</a></h2>
			);
		} else {
			// this is the current page so give it an active class
			return (
				<h2 className="au-sidenav--title au-sidenav--title-active">
					<a href={makeUrlFromCuttlebelleId(page._ID)}>{pageTitle}</a>
				</h2>
			);
		}
	}

	// How the menu works:
  // 1. If I am a top level (2nd level) page (e.g. Content Strategy Guide)
	//    Show my children.
  // 2. If I am a 3rd level page or deeper,
	//    Show my direct parent, siblings, and children
  //
  // Example of Levels terminology:
  // 1st- Homepage "/"
  //  2nd - Digital Service Standard "/digital-service-standard/"
  //   3rd - Understand User Needs "/digital-service-standard/1-understand-user-needs/"

	function makeMenuList(){
		var rows = [];

		// form a nested list for 3rd level pages and deeper
		for (var i = 0; i < siblingkeys.length; i++) {
			// exit loop if page is hidden or is a top level page
			if (page._pages[ siblingkeys[i] ].hidden || siblingkeys[i] == "privacy-statement" || isTopLevelPage) {
				continue;
			}
			// if it is the current page form a nested list of children
			// but only if it is not a top-level page
			if (sibling_titles[i] == pageTitle) {
				rows.push(
					<NavListNestedItem
						itemname={sibling_titles[i]}
						titles={children_titles}
						ids={childrenkeys}
						key={Math.random()}
					/>)
			} else if (!isTopLevelPage) {
				rows.push(
					<NavListItem
						url={makeUrlFromCuttlebelleId(siblingkeys[i])}
						itemname={sibling_titles[i]}
						key={Math.random()}
					/>);
			}
		}

	// form the basic <ul> for top level (2nd level) pages, no nesting
	if (isTopLevelPage) {
		rows.push(
			<TopLevelListItems
				itemname={sibling_titles[i]}
				titles={children_titles}
				ids={childrenkeys}
				key={Math.random()}
			/>)
	}
		return <ul className="au-sidenav--list">{rows}</ul>;
	}


	return (

			<div className="childnav">
				<a href="#childnav_button" id="childnav__button" className="au-btn au-accordion--closed">In this category </a>
				<AUaccordion open={ false } header="In this section" id="guides-childnav-accordion">
					<nav className="au-sidenav">
						{makeTopNavLink()}
						{makeMenuList()}
					</nav>
				</AUaccordion>
			</div>

	);
}


Childnav.propTypes = {};


Childnav.defaultProps = {};


export default Childnav;
