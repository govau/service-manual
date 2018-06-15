console.log("=================================");
console.log("Creating search index...");
console.log("=================================");

// Scan through all content/ directories
//   For each markdown file
//     CreateIndex(title,content,path)

var lunr = require('lunr');

var idx = lunr(function () {
  this.field('title')
  this.field('body')
	this.field('author')
	this.ref('id')

  this.add({
    "title": "Wolverine",
    "body": "A animal-human hybrid with a indestructible metal skeleton",
    "author": "Marvel Comics",
    "id": "/xmen/wolverine/"
  })
	this.add({
		"title": "Batman",
		"body": "A cloaked hero with ninja like skills and dark personality",
		"author": "DC Comics",
		"id": "/justiceleague/batman/"
	})
	this.add({
		"title": "Superman",
		"body": "A humanoid alien that grew up on earth with super-powers",
		"author": "DC Comics",
		"id": "/justiceleague/superman/"
	})
})

const searchTerm = "human";

console.log(JSON.stringify(idx.search(searchTerm + "*"),null,2));
console.log("=================================");

// Build the search index
//console.log(JSON.stringify(idx));
//console.log(JSON.stringify(idx,null,2));
