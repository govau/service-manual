$('.js-sections a').on('click', function( event ) {
	// event.preventDefault();

	var target = $(this).attr('href')
	var $target = $( target );

	$('html, body').animate({
		scrollTop: $target.offset().top
	}, 500 );
});
