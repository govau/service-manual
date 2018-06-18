console.log("=================================");
console.log("      Creating Lunr index...");


// Scan through all content/ directories
//   For each markdown file
//     CreateIndex(title,content,path)

const lunr = require('lunr');
const fs = require('fs');

const documents = [
{
	"title": "Discovery stage: exploring the problem",
	"body": "discovery stage service design delivery process kick-off",
	"path": "/topics/service-design-delivery-process/discovery-stage/"
},
{
	"title": "Roles",
	"body": "roles team discovery culture service manager product manager designers developer",
	"path": "/topics/starting-team/roles/"
},
{
	"title": "Improve your SEO",
	"body": "Search engine optimisation",
	"path": "/content-strategy/search-engine-optimisation/"
},
{
	"title": "Identify business needs",
	"body": "content strategy align agreement",
	"path": "/content-strategy/identify-business-needs/"
}
]

const index = lunr(function () {
  this.field('title')
  this.field('body')
	this.field('path')
	this.ref('path')

	documents.forEach(function (doc) {
    this.add(doc)
  }, this)

})

const serialisedIndex = JSON.stringify(index);

fs.writeFile('site/search_index.json', serialisedIndex, (err) => {
  if (err) throw err;
  console.log('The Lunr search index has been created -> site/search_index.json');
});

console.log("=================================");
