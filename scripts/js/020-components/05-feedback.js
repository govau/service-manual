var helpful_yes = document.querySelector( '.helpful_yes' );
var helpful_no = document.querySelector( '.helpful_no' );
var helpful_text = document.querySelector( '.helpful__question' );

function thanks(){
	helpful_text.innerHTML = "Thanks for your response and helping us improve our content.";
	helpful_no.remove();
	helpful_yes.remove();
}

AddEvent( helpful_yes, 'click', function( event, $this ) {
	PreventEvent( event );
	thanks();
	ga('send', {
	  hitType: 'event',
	  eventCategory: 'helpful',
	  eventAction: window.location.href,
	  eventLabel: 'helpful: yes',
		eventValue: 1
	});
});

AddEvent( helpful_no, 'click', function( event, $this ) {
	PreventEvent( event );
	thanks();
	ga('send', {
		hitType: 'event',
		eventCategory: 'helpful',
		eventAction: window.location.href,
		eventLabel: 'helpful: no',
		eventValue: -1
	});
});
