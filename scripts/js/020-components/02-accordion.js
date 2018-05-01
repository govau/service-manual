// Prevent event for IE8 and modern browsers
function PreventEvent( event ) {
	event.preventDefault ? event.preventDefault() : ( event.returnValue = false );
}

// Change EventListener to attachEvent
function AddEvent( elements, event, onEvent ) {
	if( elements ) {
		// Create an array of elements if a singular or array of elements is passed in
		if( elements.length === undefined ) {
			elements = [ elements ];
		}

		// For each element add the correct event listener
		for( var i = 0; i < elements.length; i++ ) {
			if( typeof Element.prototype.addEventListener === "undefined" ) {

				// Make sure that we pass this
				( function( element, event ) {
					element.attachEvent( "on" + event, function( actualEvent ) {
						onEvent( actualEvent, element );
					});
				})( elements[ i ], event );
			}
			else {
				( function( element, event ) {
					element.addEventListener( event, function( actualEvent ) {
						onEvent( actualEvent, element );
					});
				})( elements[ i ], event );
			}
		}
	}
}

var accordions = document.querySelectorAll( '.js-au-accordion' );

AddEvent( accordions, 'click', function( event, $this ) {
	PreventEvent( event );
	AU.accordion.Toggle( $this );
});
