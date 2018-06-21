var url_string = window.location.href;
var url = new URL(url_string);

// only run Lunr code on the search page
// as Lunr.min.js is not loaded by default
if (window.location.pathname == "/search/" ) {

	var query = url.searchParams.get("query");
	var searchresults = document.getElementById("searchresults__query")
	var searchresults__resultslist = document.getElementById("searchresults__resultslist")
	var resultsObj = new Object();
	var htmlstring = "";

	searchresults.innerHTML = query;

	function reqListener() {
	  var obj = JSON.parse(this.responseText);
		var index = lunr.Index.load(obj);
		var searchresults_json = index.search(query + "~1");
		resultsObj = searchresults_json;
		//console.log(JSON.stringify(resultsObj));

		// fetch the path map to lookup title and form the link
		var load_pathmap = new XMLHttpRequest();
		load_pathmap.onload = pmListener;
		load_pathmap.onerror = reqError;
		load_pathmap.open('get', '../pathmap.json', true);
		load_pathmap.send();

	}

	function pmListener() {
		var documentsjson = JSON.parse(this.responseText);
		//console.log(JSON.stringify(documentsjson));
		// form the results list
		resultsObj.forEach (function (result) {
			// lookup the title
			var pagetitle = documentsjson.find(function(document) {
				return document.path == result.ref;
			});
			htmlstring = htmlstring + "<li><a href='" + result.ref +"'>" + pagetitle.title + "</a></li>";
		});
		searchresults__resultslist.innerHTML = htmlstring;
	}

	function reqError(err) {
	  console.log('Fetch Error :-S', err);
	}

	var load_index = new XMLHttpRequest();
	load_index.onload = reqListener;
	load_index.onerror = reqError;
	load_index.open('get', '../search_index.json', true);
	load_index.send();

}
