var helpful_yes = document.querySelector( '.helpful_yes' );
var helpful_no = document.querySelector( '.helpful_no' );
var helpful_text = document.querySelector( '.helpful__question' );

function thanksYes(){
	helpful_text.innerHTML = "Thanks for your response and helping us improve our content.";
	helpful_no.remove();
	helpful_yes.remove();
}

function thanksNo(){
	helpful_text.innerHTML = "Sorry about that. How can we improve it?";
	helpful_no.remove();
	helpful_yes.remove();
}

AddEvent( helpful_yes, 'click', function( event, $this ) {
	PreventEvent( event );
	thanksYes();
	ga('send', {
	  hitType: 'event',
	  eventCategory: 'helpful: yes',
	  eventAction: window.location.href,
	  eventLabel: 'helpful: yes',
		eventValue: 1
	});
});

AddEvent( helpful_no, 'click', function( event, $this ) {
	PreventEvent( event );
	thanksNo();
	ga('send', {
		hitType: 'event',
		eventCategory: 'helpful: no',
		eventAction: window.location.href,
		eventLabel: 'helpful: no',
		eventValue: -1
	});
});
