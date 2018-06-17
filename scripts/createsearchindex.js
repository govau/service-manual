console.log("=================================");
console.log("         Lunr search...");
console.log("=================================");

// Scan through all content/ directories
//   For each markdown file
//     CreateIndex(title,content,path)

var lunr = require('lunr');

var index = lunr(function () {
  this.field('title')
  this.field('body')
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
})

const searchTerm = "team";


// TO DO: Serialise, store the file in FS, and fetch the file from a static page

const serialisedIndex = JSON.stringify(index);
// fs.store serialisedIndex as "/site/searchindex.json"



console.log(JSON.stringify(index.search(searchTerm),null,2));


console.log("=================================");

// Build the search index
//console.log(JSON.stringify(index));
//console.log(JSON.stringify(index,null,2));
