console.log(" 🌙 Creating Lunr index...");

const lunr = require('lunr');
const fs = require('fs');

const data = fs.readFileSync('site/documents.json');
const documents = JSON.parse(data);

// field and document BOOST docs:
// https://github.com/olivernn/lunr.js/issues/267

const index = lunr(function() {
	this.field('keywords' , { boost: 30 });
	this.field('title', { boost: 10 });
	this.field('description' , { boost: 5 });
	this.field('body');
	this.ref('id');
	this.metadataWhitelist = ['position'];

	documents.forEach(function(doc) {
		this.add(doc, { boost: doc.boost });
	}, this)

})

const serialisedIndex = JSON.stringify(index);

fs.writeFile('site/search_index.json', serialisedIndex, (err) => {
	if (err) throw err;
	console.log('💾 The Lunr search index has been created -> site/search_index.json');
});
