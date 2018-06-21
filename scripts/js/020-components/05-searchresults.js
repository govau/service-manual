function getAllUrlParams(url) {

  // get query string from url (optional) or window
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

  // we'll store the parameters here
  var obj = {};

  // if query string exists
  if (queryString) {

    // stuff after # is not part of query string, so get rid of it
    queryString = queryString.split('#')[0];

    // split our query string into its component parts
    var arr = queryString.split('&');

    for (var i=0; i<arr.length; i++) {
      // separate the keys and the values
      var a = arr[i].split('=');

      // in case params look like: list[]=thing1&list[]=thing2
      var paramNum = undefined;
      var paramName = a[0].replace(/\[\d*\]/, function(v) {
        paramNum = v.slice(1,-1);
        return '';
      });

      // set parameter value (use 'true' if empty)
      var paramValue = typeof(a[1])==='undefined' ? true : a[1];

      // (optional) keep case consistent
      paramName = paramName.toLowerCase();
      paramValue = paramValue.toLowerCase();

      // if parameter name already exists
      if (obj[paramName]) {
        // convert value to array (if still string)
        if (typeof obj[paramName] === 'string') {
          obj[paramName] = [obj[paramName]];
        }
        // if no array index number specified...
        if (typeof paramNum === 'undefined') {
          // put the value on the end of the array
          obj[paramName].push(paramValue);
        }
        // if array index number specified...
        else {
          // put the value at that index number
          obj[paramName][paramNum] = paramValue;
        }
      }
      // if param name doesn't exist yet, set it
      else {
        obj[paramName] = paramValue;
      }
    }
  }

  return obj;
}

//var url_string = window.location.href;
//var url = new URL(url_string);

// only run Lunr code on the search page
// as Lunr.min.js is not loaded by default
if (window.location.pathname == "/search/" ) {

	var query = getAllUrlParams().query;
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

			// var pagetitle = documentsjson.find(function(document) {
			// 	return document.path == result.ref;
			// });

			var pagetitle = "";

			for (var i = 0; i < documentsjson.length; i++ ) {
				//console.log(documentsjson[i].title);
				if (documentsjson[i].path == result.ref) {
					pagetitle = documentsjson[i].title;
					continue;
				}
			}

			htmlstring = htmlstring + "<li><a href='" + result.ref +"'>" + pagetitle + "</a></li>";
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
