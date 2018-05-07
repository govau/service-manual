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

 class NavListItem extends React.Component {

   render(){
			if (this.props.url) {
	    	return (<li className="guideschildnav__item"><a href={this.props.url}>{this.props.itemname}</a></li>);
			} else {
				return (<li className="guideschildnav__item"><strong>{this.props.itemname}</strong></li>);
			}
   }
 }

const Childnav = ({ page }) => {

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

	// 2nd level page (eg guides.service.gov.au/content-strategy/)
	if (page._parents.length == 2) {
		siblings = page._nav.homepage;
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

// get the page titles from the list of id's (keys)
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
		for (var i = 0; i < childrenkeys.length; i++) {
			// exit loop if page is hidden
			if (page._pages[ childrenkeys[i] ].hidden) {
				continue;
			}
			rows.push(<NavListItem url={makeUrl(childrenkeys[i])} itemname={children_titles[i]} key={childrenkeys[i]}/>)
		}

		return <ul key={Math.random()}>{rows}</ul>;
	}

	function makeUrl(pageid) {
		if (pageid == "index") {
			return "/";
		} else {
			return "/" + pageid;
		}
	}

	function makeMenuList(){
		var rows = [];
		for (var i = 0; i < siblingkeys.length; i++) {
			// exit loop if page is hidden
			if (page._pages[ siblingkeys[i] ].hidden) {
				continue;
			}

			// if it is the current page make a non-link item and print its children
			if (sibling_titles[i] == pageTitle) {
				rows.push(<NavListItem itemname={sibling_titles[i]} key={siblingkeys[i]} />);
				if (hasChildren()) { rows.push(makeChildrenList()); }
			} else {
				rows.push(<NavListItem url={makeUrl(siblingkeys[i])} itemname={sibling_titles[i]} key={siblingkeys[i]} />);
			}
		}
		return <ul>{rows}</ul>;
	}


	return (

			<div className="childnav">
				<div className="childnav__container">
					<a href="#childnav_button" id="childnav__button" className="au-btn au-accordion--closed">In this category </a>
					<AUaccordion open={ false } header="In this section" id="guides-childnav-accordion">

						<a href={makeUrl(parent_id)}>{parent_title}</a>
						{makeMenuList()}

						<p className="childnav__debug">page._ID</p>
						<pre className="childnav__debug">{page._ID}</pre>

						<p className="childnav__debug">parent_title:</p>
						<pre className="childnav__debug">{JSON.stringify(parent_title,null,3)}</pre>

						<p className="childnav__debug">parent_id:</p>
						<pre className="childnav__debug">{JSON.stringify(parent_id,null,3)}</pre>

						<p className="childnav__debug">page._parents:</p>
						<pre className="childnav__debug">{JSON.stringify(parents,null,3)}</pre>

						<p className="childnav__debug">siblings_keys:</p>
						<pre className="childnav__debug">{JSON.stringify(siblingkeys,null,3)}</pre>

						<p className="childnav__debug">sibling_titles</p>
						<pre className="childnav__debug">{JSON.stringify(sibling_titles,null,3)}</pre>

						<p className="childnav__debug">has children?</p>
						<pre className="childnav__debug">{printHasChildren()}</pre>

						<p className="childnav__debug">children</p>
						<pre className="childnav__debug">{JSON.stringify(children,null,3)}</pre>

						<p className="childnav__debug">children_titles</p>
						<pre className="childnav__debug">{JSON.stringify(children_titles,null,3)}</pre>

					</AUaccordion>
				</div>
			</div>

	);
}


Childnav.propTypes = {};


Childnav.defaultProps = {};


export default Childnav;
