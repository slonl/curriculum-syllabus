import Curriculum from 'curriculum-js'

async function validate() {

	var curriculum   = new Curriculum()
	var basisSchema  = await curriculum.loadContextFromFile('curriculum-basis', 'curriculum-basis/context.json');
	var examenSchema = await curriculum.loadContextFromFile('curriculum-examenprogramma', 'curriculum-examenprogramma/context.json');
	var schema       = await curriculum.loadContextFromFile('curriculum-syllabus', 'context.json');
	try {
		let result = await curriculum.validate(schema)
		console.log('Data is valid!')
	} catch(error) {
		if (!error.validationErrors) {
			console.error(error)
		} else {
			error.validationErrors.forEach(error => {
				console.error(error.instancePath+': '+error.message)
			})
		}
	}
}

validate()
