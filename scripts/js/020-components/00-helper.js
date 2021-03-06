// Add, Has and Remove class for IE8
function AddClass( element, elementClass ) {
	return element.className += " " + elementClass;
}

function HasClass( element, elementClass ) {
	return element.className.match( new RegExp( "(\\s|^)" + elementClass + "(\\s|$)") );
}

function RemoveClass( element, elementClass ) {
	if( HasClass( element, elementClass ) ) {
		var reg = new RegExp( "(\\s|^)" + elementClass + "(\\s|$)" );
		element.className = element.className.replace( reg, " " );
	}
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


// A simple debounce function to run a function after it has stopped being called for a certain amount of time
function Debounce( runThisFunction, wait, immediate ) {
	var timeout;

	return function() {
		var context = this;
		var args    = arguments;

		var later = function() {
			timeout = null;
			if (!immediate) runThisFunction.apply( context, args );
		};

		var callNow = immediate && !timeout;

		clearTimeout( timeout );
		timeout = setTimeout( later, wait );

		if ( callNow ) {
			runThisFunction.apply( context, args );
		};
	};
};

// Prevent event for IE8 and modern browsers
function PreventEvent( event ) {
	event.preventDefault ? event.preventDefault() : ( event.returnValue = false );
}

// Create Element.remove() function if not exist
// Internet Explorer fix
if (!('remove' in Element.prototype)) {
	Element.prototype.remove = function() {
		if (this.parentNode) {
			this.parentNode.removeChild(this);
		}
	};
}
