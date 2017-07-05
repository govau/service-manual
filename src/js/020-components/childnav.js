$('.js-childnav .childnav__controls').on('click', function( event ) {
	event.preventDefault();
	const self = this;

	UIKIT.animate.Toggle({
		element: document.getElementById('childnav-list'),
		property: 'height',
		postfunction: function( element, state ) {
			if ( state === 'open' ) {
				$( element ).addClass('is-open');
				$( self ).addClass('is-open');
			}
			else {
				$( element ).removeClass('is-open');
				$( self ).removeClass('is-open');
			}

			// reset height on larger devices
			window.onresize = function(event) {
				if ( window.innerWidth > 575 ) {
					$( element ).css('height', 'auto');
			   } else {
					if (element.style.removeProperty) {
						element.style.removeProperty('height');
					} else {
						// for < ie 9
						element.style.removeAttribute('height');
					}
				}
			};
		}
	});
});
