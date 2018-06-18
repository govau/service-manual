
const url_string = window.location.href;
const url = new URL(url_string);

// only run Lunr code on the search page
// as Lunr.min.js is not loaded by default
if (window.location.pathname == "/search/" ) {

	const query = url.searchParams.get("query");
	const searchresults = document.getElementById("searchresults__query")
	const searchresults__resultslist = document.getElementById("searchresults__resultslist")

	searchresults.innerHTML = query;

	var index = lunr(function () {
	  this.field('title')
	  this.field('body')
		this.field('path')
		this.ref('path')

	  this.add({
	    "title": "Discovery stage: exploring the problem",
	    "body": "discovery stage service design delivery process kick-off",
	    "path": "/topics/service-design-delivery-process/discovery-stage/"
	  })
		this.add({
			"title": "Roles",
			"body": "roles team discovery culture service manager product manager designers developer",
			"path": "/topics/starting-team/roles/"
		})
		this.add({
			"title": "Identify business needs",
			"body": "content strategy align agreement",
			"path": "/content-strategy/identify-business-needs/"
		})
		this.add({
			"title": "Define your SEO",
			"body": "Search engine optimisation in-page off-page",
			"path": "/content-strategy/seo/"
		})
	})

	let searchresults_json = index.search(query + "~1");

	searchresults__resultslist.innerHTML = JSON.stringify(searchresults_json,null,2);

}
