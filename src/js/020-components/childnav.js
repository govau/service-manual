$('.js-childnav .childnav__controls').on('click', function( event ) {
	event.preventDefault();
	var self = this;

	UIKIT.animate.Toggle({
		element: document.getElementById('childnav-list'),
		property: 'height',
		prefunction: function( element, state ) {
			if( state === 'opening' ) {
				$( self ).addClass('is-open');
			}
			else {
				$( self ).removeClass('is-open');
			}
		},
		postfunction: function( element, state ) {
			if( state === 'open' ) {
				$( element ).addClass('is-open');
			}
			else {
				$( element ).removeClass('is-open');
			}

			// reset height on larger devices
			window.onresize = function(event) {
				if( window.innerWidth > 575 ) {
					$( element ).css('height', 'auto');
				}
				else {
					if(element.style.removeProperty) {
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
