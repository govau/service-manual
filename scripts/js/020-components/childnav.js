var childNavElement  = document.getElementById( 'guides-childnav-accordion' );

function ToggleChildNav() {
	if ( childNavElement ) {
		var toggleLink = childNavElement.getElementsByClassName('au-accordion__title');
		if (document.documentElement.clientWidth < 970) {
			AU.accordion.Close( toggleLink );
		} else {
			AU.accordion.Open (toggleLink);
		}
	}
}

var ChildNavResize = Debounce(function() {
	ToggleChildNav();
}, 250);

ToggleChildNav();
