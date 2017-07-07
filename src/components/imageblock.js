import PropTypes from 'prop-types';
import React from 'react';

import Slugify from 'slugify';

/**
 * Imageblock for use on page
 *
 * @disable-docs
 */

const Imageblock = ( page ) => {

	const theme = page._pages[ page._ID ].theme ? page._pages[ page._ID ].theme : 'dark';
	const image = page.image ? page.image : '';
	const backgroundImage = `url(/assets/img/${ image }) `;

	return (
		<div className={`imageblock imageblock--${ theme } uikit-body uikit-grid`} style={{ backgroundImage }}>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className={`imageblock__content--${ theme }`}>
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


Imageblock.propTypes = {};


Imageblock.defaultProps = {};


export default Imageblock;
