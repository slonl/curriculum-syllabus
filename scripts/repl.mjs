    import Curriculum from 'curriculum-js';
    import repl from 'repl';

    var curriculum = new Curriculum();

    var contexts = [
    	'basis',
    	'examenprogramma',
    ];

    var schemaBaseURL  = 'https://opendata.slo.nl/curriculum/schemas/';

    var schemas = {};
    var schemaNames = {};
    contexts.forEach(function(context) {
        schemaNames[context] = 'curriculum-'+context+'/context.json';
        schemas[context] = curriculum.loadContextFromFile('curriculum-'+context, 'curriculum-'+context+'/context.json' );
    });
    schemaNames['syllabus'] = 'context.json';
    schemas['syllabus'] = curriculum.loadContextFromFile('curriculum-syllabus', 'context.json');

    var server = repl.start({
        ignoreUndefined: true
    });

    server.context.curriculum = curriculum;
    if (process.env.NODE_REPL_HISTORY) {
        server.setupHistory(process.env.NODE_REPL_HISTORY, (e) => { if (e) console.log(e); } );
    } else {
        console.log('Set environment variable NODE_REPL_HISTORY=.repl_history to enable persistent REPL history');
    }
