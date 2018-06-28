var helpful_yes = document.querySelectorAll( '.helpful_yes' );

AddEvent( helpful_yes, 'click', function( event, $this ) {
	PreventEvent( event );
	console.log("Yes");
});

var helpful_no = document.querySelectorAll( '.helpful_no' );

AddEvent( helpful_no, 'click', function( event, $this ) {
	PreventEvent( event );
	console.log("No");
});
