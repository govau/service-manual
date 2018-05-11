import PropTypes from 'prop-types';
import Slugify from 'slugify';
import React from 'react';


/**
 * The textblock component
 */
const Textblock = ( page ) => {

	const HeadingTag = `h${ page.level }`;
	const id = page.title ? Slugify( page.title ).toLowerCase() : null;

	return (
	<div className={ `au-body au-grid textblock textblock--${ page.stackPosition }` } >
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-offset-3 col-md-9">
					<div className="textwrapper textblock__text">

						{ page.title && <HeadingTag id={ id } className={ `display-${ page.display }` }>
							{ page.title }
						</HeadingTag>
						}

						{ page._body }
					</div>
				</div>
			</div>
		</div>
	</div>
)};


Textblock.propTypes = {
	/**
	 * quote: This is pulled out of the text
	 */
	quote: PropTypes.string,

	/**
	 * title: The quick brown fox jumped over the lazy dog
	 */
	title: PropTypes.string,

	/**
	 * level: 2
	 */
	level: PropTypes.number,

	/**
	 * display: 3
	 */
	display: PropTypes.number,

	/**
	 * _body: (text)(7)
	 */
	_body: PropTypes.node.isRequired,
};


Textblock.defaultProps = {};


export default Textblock;
