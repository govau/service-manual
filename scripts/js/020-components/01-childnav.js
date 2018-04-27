var childNavElement  = document.getElementById( 'guides-childnav-accordion' );
var childNavClicked = false;

// decide whether to open or close the accordion depending on screen size
function CheckChildNav() {
	if ( childNavElement ) {
		var anchorLinkToggler = childNavElement.getElementsByClassName('au-accordion__title');

		// check if the button is hidden (display:none) to decide whether to be
		// open or closed
		var guidesButtonDisplay = window.getComputedStyle( childnav__button, '' ).getPropertyValue( 'display' );
		if( guidesButtonDisplay === 'none' ){
			AU.accordion.Open (anchorLinkToggler);
		// check if the accordion has been opened by the user, if so, don't auto resize
		} else if (!childNavClicked) {
			AU.accordion.Close( anchorLinkToggler );
		}
	}
}

// toggle the accordion as a user action
function UserToggleChildNav() {
	if ( childNavElement ) {
		var anchorLinkToggler = childNavElement.getElementsByClassName('au-accordion__title');
		AU.accordion.Toggle( anchorLinkToggler );
		childNavClicked = true;
	}
}

// Run on page load
CheckChildNav();

// Run functions after a debounced resize
var ChildNavResize = Debounce(function() {
	CheckChildNav();
}, 250);

window.addEventListener("resize",ChildNavResize);

var childnavbutton = document.getElementById('childnav__button');
if (childnavbutton) {
	childnavbutton.addEventListener("click",UserToggleChildNav);
}
