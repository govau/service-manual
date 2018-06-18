console.log(" 🌙 Creating Lunr index...");


// Scan through all content/ directories
//   For each markdown file
//     CreateIndex(title,content,path)

const lunr = require('lunr');
const fs = require('fs');

const data = fs.readFileSync('scripts/documents.json');
const documents = JSON.parse(data);

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
