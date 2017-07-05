$('.js-childnav .childnav__controls').on('click', function( event ) {
	event.preventDefault();

	UIKIT.animate.Toggle({
		element: document.getElementById('childnav-list'),
		property: 'height',
		postfunction: function( element, state ) {
			if ( state === 'open' ) {
				$( element ).addClass('is-open');
			}
			else {
				$( element ).removeClass('is-open');
			}
		}
	});

});
