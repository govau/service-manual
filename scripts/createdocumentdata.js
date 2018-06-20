console.log("🔍 Creating document data for Lunr...");

const yaml = require('js-yaml');

// ♻️ LOOP THRU ALL THE FILES AND BUILD UP THE JSON
const fs = require('fs');
const path = require('path');
const rootdir = path.dirname(__dirname)+"/content/";

/**
 * Explores recursively a directory and returns all the filepaths and folderpaths in the callback.
 *
 * @see http://stackoverflow.com/a/5827895/4241030
 * @see https://ourcodeworld.com/articles/read/420/how-to-read-recursively-a-directory-in-node-js
 * @param {String} dir
 * @param {Function} done
 */
function directoryWalker(dir, done) {
	let results = [];
	let documents = [];

	fs.readdir(dir, function(err, list) {
		if (err) return done(err);

		var pending = list.length;

		if (!pending) return done(null, results, documents);

		list.forEach(function(file) {
			file = path.resolve(dir, file);

			fs.stat(file, function(err, stat) {
				// If directory, execute a recursive call
				if (stat && stat.isDirectory()) {
					// Add directory to array [comment if you need to remove the directories from the array]

					let document = new Object();
					document.title = "chris"
					document.path = file.replace(rootdir,"/");
					documents.push(document);

					results.push(file);

					directoryWalker(file, function(err, res, docs) {
						results = results.concat(res);
						documents = documents.concat(docs);
						if (!--pending) done(null, results, documents);
					});
				} else {
					//results.push(file);

					if (!--pending) done(null, results, documents);
				}
			});
		});
	});
};

////////////////////////

// 💾 WRITE THE FILE
function writeDocumentData(data) {
	fs.writeFile('site/documents.json', JSON.stringify(data), (err) => {
	  if (err) throw err;
	  console.log('💾 The Lunr document index has been created -> site/documents.json');
	});
}

directoryWalker("./content/", function(err, dirs, documents) {
	if (err) {
		throw err;
	}
	//console.log(dirs);
	const util = require('util')
	console.log(util.inspect(documents, { maxArrayLength: null }))
	writeDocumentData(documents);
});
