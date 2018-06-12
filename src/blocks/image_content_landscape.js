import PropTypes from 'prop-types';
import React from 'react';
import Slugify from 'slugify';

/**
 * The ImageContentLandscape component
 */
const ImageContentLandscape = ( page ) => {

	const imageSrc = page.image.startsWith('http') ? `${ page.image }` : `/assets/img/${ page.image }`;
	const HeadingTag = `h${ page.level }`;
	const id = page.title ? Slugify( page.title ).toLowerCase() : null;

	let imageLink = page.link;
	if( imageLink ) {
		imageLink = imageLink.startsWith('http')
			? page.link
			: `/assets/img/${ page.link }`;
	}

	const Content = (
		<div className="imagecontentlandscape__content">
			<div className="textwrapper imagecontentlandscape__headline__wrapper">
				{ page.title && <HeadingTag id={ id } className={ `imagecontentlandscape__headline display-${ page.display }` }>
					{ page.title }
				</HeadingTag>
				}
			</div>
			{ page._body }
		</div>
	);

	const Figure = (
		<div>
			<figure className="imagecontentlandscape__image">
				{ imageLink === undefined
					? ( <img className="imagecontentlandscape__image__img" src={ imageSrc } alt={ page.imageAlt } /> )
					: ( <a href={ imageLink }><img className="imagecontentlandscape__image__img" src={ imageSrc } alt={ page.imageAlt } /></a> )
				}
				{ page.caption && <figcaption className="imagecontentlandscape__image__caption">{ page.caption }</figcaption> }
			</figure>
		</div>
	);

	return (
		<div className={`imagecontentlandscape ${ page.stackPosition ? 'imagecontentlandscape--stack' + page.stackPosition : '' }   au-body au-grid`}>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-offset-3 col-md-9">
							{ Content }
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12 col-md-offset-3 col-md-9">
						{ Figure }
					</div>
				</div>
			</div>
		</div>
	);
}


ImageContentLandscape.propTypes = {
	/**
	 * image: https://via.placeholder.com/500x500
	 */
	image: PropTypes.string,

	/**
	 * link: https://via.placeholder.com/500x500
	 */
	link: PropTypes.string,

	/**
	 * title: How do i get started
	 */
	title: PropTypes.string,

	/**
	 * stackPosition: top
	 */
	stackPosition: PropTypes.string,

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
	 * display: 3
	 */
	display: PropTypes.number,

	/**
	 * _body: (text)(4)
	 */
	_body: PropTypes.node.isRequired,
};


ImageContentLandscape.defaultProps = {
	level: 2,
	display: 3,
};


export default ImageContentLandscape;
