import PropTypes from 'prop-types';
import React from 'react';

import Slugify from 'slugify';

/**
 * Imageevent for use on page
 *
 * @disable-docs
 */

const Imageevent = ( page ) => {

	const theme = page._pages[ page._ID ].theme ? page._pages[ page._ID ].theme : 'dark';
	const image = page.image ? page.image : '';
	//const backgroundImage = ` url(/assets/img/${ image }) `;
	const backgroundImage = " url('https://via.placeholder.com/1000x550')";
	const reverse = page.reverse ? 'imageblock--reverse' : '';


	return (
		<div className={`imageblock imageblock--${ theme } ${ reverse } uikit-body uikit-grid`}>
			<div className="imageblock__image" style={{ backgroundImage }}>
				<div className="container">
					<div className="row">
						<div className={`imageblock__content imageblock__content--${ theme }`}>
							{ page.section && <span className="section__section intro__category" id={ Slugify( page.section ).toLowerCase() } >{ page.section }</span> }
							<div className="textwrapper">
								<h1 className="imageblock__headline">{ page.title ? page.title : page._pages[ page._ID ].title }</h1>
							</div>
							{ page._body }
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}


Imageevent.propTypes = {};


Imageevent.defaultProps = {};


export default Imageevent;
