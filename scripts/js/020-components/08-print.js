// track print events in Google Analytics

var printedCount = 0;

function trackPrintEvent() {
	printedCount++;
	if (printedCount < 2) {
		ga('send', {
			hitType: 'event',
			eventCategory: 'print',
			eventAction: window.location.href
		});
	}
}

window.onbeforeprint = function() {trackPrintEvent()};

// this is for Safari only
var mediaQueryList = window.matchMedia('print');
mediaQueryList.addListener(function(mql) {
  if(mql.matches) {
    trackPrintEvent();
  }
});
