// ♻️ LOOP THRU ALL THE FILES AND BUILD UP THE JSON
// Outputs a JSON document list for indexing by Lunr

console.log("🔍 Creating document data for Lunr...");

const yaml = require('js-yaml');
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
	let pathmap = [];

	fs.readdir(dir, function(err, list) {
		if (err) return done(err);

		var pending = list.length;

		if (!pending) return done(null, results, documents, pathmap);

		list.forEach(function(file) {
			file = path.resolve(dir, file);

			fs.stat(file, function(err, stat) {
				// If directory, execute a recursive call
				if (stat && stat.isDirectory()) {

					let document = new Object();
					let pathmapitem = new Object();

					// we are currently on a directory (file)
					// open all the markdown files inside this directory AND
					// concat into the document.body

					// load the index.yml and get the data
					try {
					  const indexyaml = yaml.safeLoad(fs.readFileSync(file + "/index.yml", 'utf8'));

						// do not index hidden pages
						if (indexyaml.hidden) {
							throw("Not indexing hidden page: " + file.replace(rootdir,"/"));
						}
						document.title = indexyaml.pagetitle;
						document.description = indexyaml.description;
						pathmapitem.title = indexyaml.pagetitle;

						document.path = file.replace(rootdir,"/");
						pathmapitem.path = file.replace(rootdir,"/");
						documents.push(document);
						pathmap.push(pathmapitem);

					} catch (e) {
					  console.log(e);
					}

					results.push(file);

					directoryWalker(file, function(err, res, docs, pthmp) {
						results = results.concat(res);
						documents = documents.concat(docs);
						pathmap = pathmap.concat(pthmp);
						if (!--pending) done(null, results, documents, pathmap);
					});
				} else {
					//results.push(file);

					if (!--pending) done(null, results, documents, pathmap);
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

function writePathmapData(data) {
	fs.writeFile('site/pathmap.json', JSON.stringify(data), (err) => {
	  if (err) throw err;
	  console.log('💾 The Lunr path map has been created -> site/pathmap.json');
	});
}

directoryWalker("./content/", function(err, dirs, documents, pathmap) {
	if (err) {
		throw err;
	}

	const util = require('util')
	//console.log(util.inspect(pathmap, { maxArrayLength: null }))

	writeDocumentData(documents);
	writePathmapData(pathmap);
});
