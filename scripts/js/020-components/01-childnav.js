var childNavElement  = document.getElementById( 'guides-childnav-accordion' );

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

var ChildNavResize = Debounce(function() {
	ToggleChildNav();
}, 250);

ToggleChildNav();

window.addEventListener("resize",ToggleChildNav);
