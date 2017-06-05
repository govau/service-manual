import Visit from 'unist-util-visit';
import Is from 'unist-util-is';


const tags = [
	'cards',
	'things',
];

const CustomMD = () => {
	return ( tree, file ) => {
		Visit( tree, 'paragraph', node => {
			const children = node.children;

			children.forEach( ( child, index ) => {
				if( children[ index ].value ) {
					if( children[ index ].value.startsWith('<card') ) {
						console.log( JSON.stringify(children[ index ]) );
					}
				}

					// Is( 'SentenceNode', children[ index - 1 ] ) &&
					// Is( 'WhiteSpaceNode', child ) &&
					// Is( 'SentenceNode', children[ index + 1 ] )
				// ) {
				// 	console.log(child);
				// }
			});
		});
	};
};

export default CustomMD;
