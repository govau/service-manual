import PropTypes from 'prop-types';
import Slugify from 'slugify';
import React from 'react';


/**
 * The PageHeaderFullWidth component
 */
const PageHeaderFullWidth = ( page ) => {

	return (
	<div className="au-body au-grid" >
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-12">
					<h2 className="au-display-xxxl topics__header guides-category-header-main-heading">{ page.title }</h2>
				</div>
			</div>
		</div>
	</div>
)};


PageHeaderFullWidth.propTypes = {
};


PageHeaderFullWidth.defaultProps = {};


export default PageHeaderFullWidth;
