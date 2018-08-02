// track print events in Google Analytics

var printedCount = 0;

function logPrintEvent() {
	printedCount++;
	if (printedCount < 2) {
		ga('send', {
			hitType: 'event',
			eventCategory: 'print',
			eventAction: window.location.href
		});
	}
}

window.onbeforeprint = function() {logPrintEvent()};

var mediaQueryList = window.matchMedia('print');
mediaQueryList.addListener(function(mql) {
  if(mql.matches) {
    logPrintEvent();
  }
});
