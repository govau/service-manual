import PropTypes from 'prop-types';
import React from 'react';

/**
 * The category heading component
 */
const CategoryHeadline = ( page ) => {
	const theme = page._pages[ page._ID ].theme ? page._pages[ page._ID ].theme : 'dark';

	return (
		<div className={`au-body au-grid category-headline category-headline--${ theme }`}>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-offset-3 col-md-9">
						<div className="category-headline__title">{ page.title }</div>
					</div>
				</div>
			</div>
		</div>
	);
};


CategoryHeadline.propTypes = {
	/**
	 * title: Content strategy
	 */
	title: PropTypes.string.isRequired,
};


CategoryHeadline.defaultProps = {};


export default CategoryHeadline;
