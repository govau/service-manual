console.log("=================================");
console.log("      Creating Lunr index...");


// Scan through all content/ directories
//   For each markdown file
//     CreateIndex(title,content,path)

const lunr = require('lunr');
const fs = require('fs');

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

const serialisedIndex = JSON.stringify(index);

fs.writeFile('site/search_index.json', serialisedIndex, (err) => {
  if (err) throw err;
  console.log('The Lunr search index has been created -> site/search_index.json');
});

console.log("=================================");
