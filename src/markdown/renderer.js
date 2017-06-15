const Marked = require(`marked`);

const headingLevels = {
	1: 'display-1',
	2: 'display-2',
	3: 'display-3',
	4: 'display-4',
	5: 'display-5',
	6: 'display-6',
};

const renderer = new Marked.Renderer();

renderer.heading = ( text, level ) => {
	let display;

	if( text.startsWith('[') ) {
		const displayText = text.split(']');
		display = displayText[ 0 ].substring( 1 );

		text = displayText.splice( 1 ).join(']');
	}
	else {
		display = level;
	}

	return `<h${ level }${ headingLevels[ display ] ? ` class="${ headingLevels[ display ] }"` : `` }>${ text }</h${ level }>`;
};

module.exports = renderer;
