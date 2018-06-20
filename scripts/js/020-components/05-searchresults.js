const url_string = window.location.href;
const url = new URL(url_string);

// only run Lunr code on the search page
// as Lunr.min.js is not loaded by default
if (window.location.pathname == "/search/" ) {

	const query = url.searchParams.get("query");
	const searchresults = document.getElementById("searchresults__query")
	const searchresults__resultslist = document.getElementById("searchresults__resultslist")

	searchresults.innerHTML = query;


// fetch the serialised search index at site/search_index.json
	fetch('../search_index.json')
	.then(function(response) {
		return response.json();
	})
	.then(function(json) {
		const index = lunr.Index.load(json);
		const searchresults_json = index.search(query + "~1");
		const resultsObj = searchresults_json;
		let htmlstring = "";

		resultsObj.forEach (function (result) {
			console.log(result.ref);
			htmlstring = htmlstring + "<li>" + result.ref + "</li>";
		});

		searchresults__resultslist.innerHTML = htmlstring;
		//searchresults__resultslist.innerHTML = JSON.stringify(searchresults_json,null,2);
	});
}
