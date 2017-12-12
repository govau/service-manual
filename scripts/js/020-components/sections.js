/***
* table contents anchor slide
*/

$('.table-contents a').on('click', function( event ) {
	// event.preventDefault();
	var target = $(this).attr('href')
	var $target = $( target );

	$('html, body').animate({
		scrollTop: $target.offset().top
	}, 500 );
});


/***
* Waypoint item highlighting
*/

if ($('.table-contents')) {
	// sections includes all of the container divs that relate to menu items.
	var $sections = $('h2');

	// The user scrolls
	$(window).scroll(function(){

		// currentScroll is the number of pixels the window has been scrolled
		var currentScroll = $(this).scrollTop();

		// $currentSection is somewhere to place the section we must be looking at
		var $currentSection

		// We check the position of each of the divs compared to the windows scroll positon
		$sections.each(function(index){
			// divPosition is the position down the page in px of the current section we are testing
			var divPosition = $(this).offset().top;

			// If the divPosition is less the the currentScroll position the div we are testing has moved above the window edge.
			// the -1 is so that it includes the div 1px before the div leave the top of the window.

			if( divPosition - 1 < currentScroll ){
				// We have either read the section or are currently reading the section so we'll call it our current section
				$currentSection = $(this);
				// If the next div has also been read or we are currently reading it we will overwrite this value again. This will leave us with the LAST div that passed.
				var id = $currentSection.attr('id');
				// This is the bit of code that uses the currentSection as its source of ID
				$('.table-contents a').removeClass('active');
				$('.table-contents a[href="#' + id + '"]').addClass('active');
			}
			else if($(window).scrollTop() + $(window).height() == $(document).height()) {
				var id = ($sections.last()).attr('id');
				$('.table-contents a').removeClass('active');
				$('.table-contents a[href="#' + id + '"]').addClass('active');
			}
			else {
				if (index == 0 ) {
					$('.table-contents a').removeClass('active');
				}
			}
		})
	});
}

/***
* init styles
*/
var element = document.getElementById("table-contents"),
	size = window.getComputedStyle(element,':after').content.replace(/"|'/g, '');

if (size == 'widescreen') {
	$('.sticky').css({
		position : 'absolute',
		left : '129px',
		padding : '0 20px 20px 20px',
		top: '233px'
	});

	$('.uikit-inpage-nav-links').css({
		paddingTop: '20px'
	});
}

/***
* Position table of contentson resize
*/

$(window).resize(_.debounce(function(e){
	var element = document.getElementById("table-contents");
	var size = window.getComputedStyle(element,':after').content.replace(/"|'/g, ''),
		$stickyrStopper = $('.footer');

	if (size == 'widescreen') {

		$('.table-contents').addClass('sticky');

		$('.sticky').css({
			position : 'absolute',
			left : '115px',
			top: '233px'
		});

		$('.uikit-inpage-nav-links').css({
			paddingLeft: '20px'
		});

		if (!!$('.sticky').offset()) { // make sure ".sticky" element exists

			var generalSidebarHeight = $('.sticky').innerHeight();
			var stickyTop = $('.sticky').offset().top;
			var stickOffset = 50;
			var stickyStopperPosition = $stickyrStopper.offset().top;
			var stopPoint = stickyStopperPosition - generalSidebarHeight - stickOffset;
			var diff = stopPoint + stickOffset;

			var windowTop = $(window).scrollTop();

			$(window).scroll(function(){ // scroll event
				var windowTop = $(window).scrollTop();

				if (stopPoint < windowTop) {
					$('.sticky').css({ position: 'absolute', top: '233px' });
				}
				else if (stickyTop < windowTop+stickOffset) {
					$('.sticky').css({ position: 'fixed', top: stickOffset });
				}
				else {
					$('.sticky').css({position: 'absolute', top: '233px'});
				}
			});
		}

	} else {
		$('.sticky').css({
			position: '',
			top: '',
			left: 0,
			paddingLeft: 0,
			marginTop: 0
		});

		$('.uikit-inpage-nav-links').css({
			paddingLeft: 0
		});

		$('.table-contents').removeClass('sticky');

	}
}, 100)).trigger('resize');
