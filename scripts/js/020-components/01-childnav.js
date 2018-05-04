// these are the event handlers for the ChildNav accordion
// What does it do?
// 1) responds to media query changes, page resizes to compact the accordion
// 2) adds a click handler to the menu button that appears in XS viewports.

var childNavElement  = document.getElementById( 'guides-childnav-accordion' );
var childNavClicked = false;
var childNavButton = document.getElementById('childnav__button');
var childNavOpen = false;

if ( childNavElement ) {
	var anchorLinkToggler = childNavElement.getElementsByClassName('au-accordion__title');
}

// toggle the accordion as a user action
function UserToggleChildNav() {
	if ( childNavElement ) {
		AU.accordion.Toggle( anchorLinkToggler );
		childNavClicked = true;

		if (!childNavOpen) {
			childNavOpen = true;
			childNavButton.classList.remove("au-accordion--closed");
		} else {
			childNavOpen = false
			childNavButton.classList.add("au-accordion--closed");
		}
	}
}

// user click handler
var childnavbutton = document.getElementById('childnav__button');
if (childnavbutton) {
	childnavbutton.addEventListener("click",UserToggleChildNav);
}
