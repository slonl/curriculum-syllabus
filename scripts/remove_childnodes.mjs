import Curriculum from 'curriculum-js'
let curriculum = new Curriculum()

async function main() {
	var schema = await curriculum.loadContextFromFile('curriculum-syllabus','context.json')

	Object.keys(curriculum.data).forEach(prop => {
		curriculum.data[prop].forEach(e => {
			if (typeof e.childNodes !== 'undefined') {
				delete e.childNodes
			}
		})
	})

	curriculum.exportFiles(schema, 'curriculum-syllabus', './');
}

main()