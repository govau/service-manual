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
	this.field('author')
	this.ref('path')

  this.add({
    "title": "Wolverine",
    "body": "A animal-human hybrid with a indestructible metal skeleton",
    "author": "Marvel Comics",
    "path": "/xmen/wolverine/"
  })
	this.add({
		"title": "Batman",
		"body": "A cloaked hero with ninja like skills and dark personality. Enemies of Superman.",
		"author": "DC Comics",
		"path": "/justiceleague/batman/"
	})
	this.add({
		"title": "Superman",
		"body": "A humanoid alien that grew up on earth with super-powers",
		"author": "DC Comics",
		"path": "/justiceleague/superman/"
	})
})

const searchTerm = "superman";

console.log(JSON.stringify(index.search(searchTerm + "*"),null,2));
console.log("=================================");

// Build the search index
//console.log(JSON.stringify(index));
//console.log(JSON.stringify(index,null,2));
