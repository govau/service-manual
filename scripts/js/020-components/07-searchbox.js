var searchbox__button_header = document.getElementById("search-btn__header");
var searchbox__textinput_header = document.getElementById("search-input__header");

AddEvent( searchbox__button_header, 'click', function( event, $this ) {
	// strip all spaces from the text input value and check if it's empty
	if (searchbox__textinput_header.value.replace(/\s/g,'') == "") {
		PreventEvent( event );
	}
});

var searchbox__button_menu = document.getElementById("search-btn__menu");
var searchbox__textinput_menu = document.getElementById("search-input__menu");

AddEvent( searchbox__button_menu, 'click', function( event, $this ) {
	// strip all spaces from the text input value and check if it's empty
	if (searchbox__textinput_menu.value.replace(/\s/g,'') == "") {
		PreventEvent( event );
	}
});

var searchbox__button_serp = document.getElementById("search-btn__serp");
var searchbox__textinput_serp = document.getElementById("search-input__serp");

AddEvent( searchbox__button_serp, 'click', function( event, $this ) {
	// strip all spaces from the text input value and check if it's empty
	if (searchbox__textinput_serp.value.replace(/\s/g,'') == "") {
		PreventEvent( event );
	}
});
