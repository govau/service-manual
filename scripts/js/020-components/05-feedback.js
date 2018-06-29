var helpful_yes = document.querySelector( '.helpful_yes' );
var helpful_no = document.querySelector( '.helpful_no' );
var helpful_text = document.querySelector( '.helpful__question' );
var helpful_textarea = document.querySelector( '.helpful__suggestion' );
var helpful_submit = document.querySelector( '.helpful__suggestion__submit' );

helpful_textarea.style.display = "none";
helpful_submit.style.display = "none";

function thanksYes(){
	helpful_text.innerHTML = "Thank you for your response, it helps us improve our service.";
	helpful_no.remove();
	helpful_yes.remove();
}

function thanksNo(){
	helpful_text.innerHTML = "Sorry to hear that. How can we improve it?";
	helpful_no.remove();
	helpful_yes.remove();
	helpful_textarea.style.display = "inline";
	helpful_submit.style.display = "inline";
}

function thanksForFeedback(){
	helpful_text.innerHTML = "Thank you for your response, it helps us improve our service.";
	helpful_textarea.remove();
	helpful_submit.remove();
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

AddEvent( helpful_submit, 'click', function( event, $this ) {
	PreventEvent( event );
	thanksForFeedback();
	ga('send', {
		hitType: 'event',
		eventCategory: 'helpful: feedback response',
		eventAction: window.location.href,
		eventLabel: helpful_textarea.value
	});
});
