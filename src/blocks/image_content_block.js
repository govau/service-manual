import PropTypes from 'prop-types';
import React from 'react';

import Slugify from 'slugify';

/**
 * The Imageblock component
 */
const ImageContentblock = ( page ) => {

	const theme = page._pages[ page._ID ].theme ? page._pages[ page._ID ].theme : 'dark';
	const imageSrc = page.image.startsWith('http') ? `${ page.image }` : `/assets/img/${ page.image }`;

	const HeadingTag = `h${ page.level }`;

	const content = (
		<div className={`imagecontentblock__content imagecontentblock__content--${ theme }`}>
			{ page.section && <span className="section__section intro__category" id={ Slugify( page.section ).toLowerCase() } >{ page.section }</span> }
			<div className="textwrapper">
				<HeadingTag className={ `imagecontentblock__headline display-3` }>
					{ page.title ? page.title : page._pages[ page._ID ].title }
				</HeadingTag>
			</div>
			{ page._body }
		</div>
	);

	const image = (
		<figure className="imagecontentblock__image">
			<a href={ imageSrc }>
				<img className="imagecontentblock__image__img" src={ imageSrc } alt={ page.imageAlt } />
			</a>
			<figcaption className="imagecontentblock__image__caption">{ page.caption }</figcaption>
		</figure>
	);

	return (
		<div className={`imagecontentblock imagecontentblock--${ theme } uikit-body uikit-grid`}>
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						{ page.reverse ? image : content }
					</div>
					<div className="col-md-6">
						{ page.reverse ? content : image }
					</div>
				</div>
			</div>
		</div>
	);
}


ImageContentblock.propTypes = {
	/**
	 * image: https://via.placeholder.com/500x500
	 */
	image: PropTypes.string,

	/**
	 * title: How do i get started
	 */
	title: PropTypes.string,

	/**
	 * reverse: false
	 */
	reverse: PropTypes.bool,

	/**
	 * imageAlt: this is an image
	 */
	imageAlt: PropTypes.string.isRequired,

	/**
	 * caption: An example of an affinity mapping session in action.
	 */
	caption: PropTypes.string,

	/**
	 * level: 2
	 */
	level: PropTypes.number,

	/**
	 * _body: (text)(4)
	 */
	_body: PropTypes.node.isRequired,
};


ImageContentblock.defaultProps = {
	level: 2,
};


export default ImageContentblock;
