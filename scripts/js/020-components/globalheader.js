$('.js-globalheader').on('click', function( event ) {
	event.preventDefault();

	UIKIT.animate.Toggle({
		element: document.getElementById('global-header-content'),
		property: 'height',
		postfunction: function( element, state ) {
			if( state === 'open' ) {
				$( element ).addClass('is-open');
			}
			else {
				$( element ).removeClass('is-open');
			}
		},
	});
});
