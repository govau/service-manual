// https://github.com/chjj/marked

const Marked = require(`marked`);
const renderer = new Marked.Renderer();


/**
 * Heading level classes
 *
 * @type {Object}
 */
const headingLevels = {
	1: 'display-1',
	2: 'display-2',
	3: 'display-3',
	4: 'display-4',
	5: 'display-5',
	6: 'display-6',
};


/**
 * Heading overwrite
 *
 * @param  {string}  text  - The text of the heading
 * @param  {integer} level - The level of the heading
 *
 * @return {string}        - The rendered HTML
 */
renderer.heading = ( text, level ) => {
	let display;

	if( text.startsWith('[') ) {
		const displayText = text.split(']');
		display = displayText[ 0 ].substring( 1 );

		text = displayText.splice( 1 ).join(']');
	}
	else {
		display = Object.keys( headingLevels ).reverse()[ level ];
	}

	return `<h${ level }${ headingLevels[ display ] ? ` class="${ headingLevels[ display ] }"` : `` }>${ text }</h${ level }>`;
};


/**
 * Link overwrite
 *
 * @param  {string} href  - The href attribute
 * @param  {string} title - The title attribute
 * @param  {string} text  - The text string
 *
 * @return {string}       - The rendered HTML
 */
renderer.link = ( href, title, text ) => {
	let attr = '';
	if( href.startsWith('http://') || href.startsWith('https://') ) {
		attr = ` rel="external"`;
	}

	return `<a href="${ href }"${ title ? ` title="${ title }"` : '' }${ attr }>${ text }</a>`;
};


module.exports = renderer;
