var helpful_yes = document.querySelector( '.helpful_yes' );
var helpful_no = document.querySelector( '.helpful_no' );
var helpful_text = document.querySelector( '.helpful__question' );
var helpful__yes__textarea = document.querySelector( '.helpful__yes__textarea' );
var helpful__yes__suggestion__submit = document.querySelector( '.helpful__yes__suggestion__submit' );
var helpful__no__textarea = document.querySelector( '.helpful__no__textarea' );
var helpful__no__suggestion__submit = document.querySelector( '.helpful__no__suggestion__submit' );


helpful__yes__textarea.style.display = "none";
helpful__yes__suggestion__submit.style.display = "none";
helpful__no__textarea.style.display = "none";
helpful__no__suggestion__submit.style.display = "none";

function thanksYes(){
	helpful_text.innerHTML = "Thank you. Your suggestions are welcome to help us improve our service.";
	helpful_no.remove();
	helpful_yes.remove();
	helpful__yes__textarea.style.display = "inline";
	helpful__yes__suggestion__submit.style.display = "inline";
}

function thanksNo(){
	helpful_text.innerHTML = "Sorry to hear that. How can we improve it?";
	helpful_no.remove();
	helpful_yes.remove();
	helpful__no__textarea.style.display = "inline";
	helpful__no__suggestion__submit.style.display = "inline";
}

function thanksForFeedback(){
	helpful_text.innerHTML = "Thank you for your response, it helps us improve our service.";
	helpful__no__textarea.remove();
	helpful__no__suggestion__submit.remove();
	helpful__yes__textarea.remove();
	helpful__yes__suggestion__submit.remove();
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
	ga('send', {
	  hitType: 'event',
	  eventCategory: 'helpful',
	  eventAction: window.location.href,
	  eventLabel: 'helpful',
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
	ga('send', {
		hitType: 'event',
		eventCategory: 'helpful',
		eventAction: window.location.href,
		eventLabel: 'helpful',
		eventValue: -1
	});
});

AddEvent( helpful__yes__suggestion__submit, 'click', function( event, $this ) {
	PreventEvent( event );
	thanksForFeedback();
	ga('send', {
		hitType: 'event',
		eventCategory: 'helpful: yes: feedback response',
		eventAction: window.location.href,
		eventLabel: helpful__yes__textarea.value
	});
});

AddEvent( helpful__no__suggestion__submit, 'click', function( event, $this ) {
	PreventEvent( event );
	thanksForFeedback();
	ga('send', {
		hitType: 'event',
		eventCategory: 'helpful: no: feedback response',
		eventAction: window.location.href,
		eventLabel: helpful__no__textarea.value
	});
});
