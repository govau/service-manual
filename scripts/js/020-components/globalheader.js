$('.js-globalheader').on('click', function( event ) {
	event.preventDefault();
	var self = this;

	UIKIT.animate.Toggle({
		element: document.getElementById('global-header-content'),
		property: 'height',
		prefunction: function( element, state ) {
			if( state === 'opening' ) {
				$( self ).addClass('is-opening');
				$( element ).addClass('is-opening');
				$( self ).addClass('is-open');
			} else {
				$( self ).removeClass('is-open');
			}
		},
		postfunction: function( element, state ) {
			if( state === 'open' ) {
				$( element ).addClass('is-open');
				$( self ).removeClass('is-opening');
				$( element ).removeClass('is-opening');
			}
			else {
				$( element ).removeClass('is-open');
				$( self ).removeClass('is-open');
			}
		},
	});
});
