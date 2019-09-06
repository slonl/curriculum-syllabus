var curriculum   = require('../curriculum-doelen/lib/curriculum.js');
var schema       = curriculum.loadSchema('context.json');
var coreSchema   = curriculum.loadSchema('curriculum-doelen/context.json', 'curriculum-doelen/');
var examenprogrammaSchema = curriculum.loadSchema('curriculum-examenprogramma/context.json', 'curriculum-examenprogramma/');

/*
for (i in curriculum.data) {
	for (var j=0; j<curriculum.data[i].length; j++) {
		if (curriculum.data[i][j].examenprogramma_id) {
			var converting = curriculum.data[i][j].examenprogramma_id;
			delete curriculum.data[i][j].examenprogramma_id;
			for (var k=0; k<converting.length; k++) {
				var type = curriculum.types[converting[k]];
				curriculum.data[i][j][type + "_id"] = [converting[k]];
			}
		}
	}
}
*/

Object.keys(curriculum.data).forEach(function(dataset) {
	curriculum.data[dataset].map(function(entry) {
		if (entry.examenprogramma_id) {
			var converting = entry.examenprogramma_id;
			console.log(converting);
			delete entry.examenprogramma_id;
			converting.forEach(function(id) {
				var type = curriculum.types[id];
				console.log(type);
				var typeId = type + "_id";
				entry[typeId] = [id];
				console.log(entry);
			});
			console.log(entry);
		}
	});
});
curriculum.exportFiles(schema, "output/");