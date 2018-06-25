console.log(" 🌙 Creating ElasticLunr index...");

const elasticlunr = require('elasticlunr');
const fs = require('fs');

const data = fs.readFileSync('site/documents.json');
const documents = JSON.parse(data);

const index = elasticlunr(function() {
	this.addField('title')
	this.addField('description')
	this.addField('body')
	this.setRef('id')

	documents.forEach(function(doc) {
		this.addDoc(doc)
	}, this)

})

const serialisedIndex = JSON.stringify(index);

fs.writeFile('site/search_index.json', serialisedIndex, (err) => {
	if (err) throw err;
	console.log('💾 The Lunr search index has been created -> site/search_index.json');
});
