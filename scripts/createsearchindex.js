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

  this.add({
    "title": "Twelfth-Night",
    "body": "If music be the food of love, play on: Give me excess of it…",
    "author": "William Shakespeare",
    "id": "/william/shakespeare/"
  })
	this.add({
		"title": "Batman",
		"body": "Batman loves throwing batarangs.",
		"author": "DC Comics",
		"id": "/dc/batman/"
	})
})

console.log(idx.search("love"));
console.log("=================================");
console.log(JSON.stringify(idx));
