console.log(" 🌙 Creating Lunr index...");

const lunr = require('lunr');
const fs = require('fs');

const data = fs.readFileSync('site/documents.json');
const documents = JSON.parse(data);

const index = lunr(function() {
	this.field('title', { boost: 10 })
	this.field('description' , { boost: 5 })
	this.field('body')
	this.ref('id')

	documents.forEach(function(doc) {
		this.add(doc, { boost: doc.boostvalue })
	}, this)

})

const serialisedIndex = JSON.stringify(index);

fs.writeFile('site/search_index.json', serialisedIndex, (err) => {
	if (err) throw err;
	console.log('💾 The Lunr search index has been created -> site/search_index.json');
});
