function fetchSearchData() {
	console.log("Fetching lunr index...");
	fetch('/search_index.json')
		.then(function(response) {
			return response.json();
		})
		.then(function(myJson) {
			//console.log(myJson);
			console.log("🌙 Lunr index has been cached :)");
	});

	fetch('/pathmap.json')
		.then(function(response) {
			return response.json();
		})
		.then(function(myJson) {
			//console.log(myJson);
			console.log("🌙 Lunr Pathmap has been cached :)");
	});
}

// Polling for the sake of my intern tests
const interval = setInterval(function() {
	if (document.readyState === 'complete') {
		clearInterval(interval);
		fetchSearchData();
	}
}, 100);
