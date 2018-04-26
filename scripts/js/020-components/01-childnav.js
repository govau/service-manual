var childNavElement  = document.getElementById( 'guides-childnav-accordion' );

// decide whether to open or close the accordion depending on screen size
function ToggleChildNav() {
	if ( childNavElement ) {
		var anchorLinkToggler = childNavElement.getElementsByClassName('au-accordion__title');
		if (document.documentElement.clientWidth < 970) {
			AU.accordion.Close( anchorLinkToggler );
		} else {
			AU.accordion.Open (anchorLinkToggler);
		}
	}
}

// Run on page load
ToggleChildNav();

// Run functions after a debounced resize
var ChildNavResize = Debounce(function() {
	ToggleChildNav();
}, 250);

window.addEventListener("resize",ChildNavResize);
