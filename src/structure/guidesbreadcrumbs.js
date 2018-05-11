import PropTypes from 'prop-types';
import React from 'react';
import Breadcrumbs from '../../scripts/uikit/breadcrumbs';


/**
 * The structure/guidesbreadcrumbs component
 */

const GuidesBreadcrumbs = ( page ) => {
	const breadcrumbs = [];

	page._parents
		.filter( parent => parent !== 'index' )
		.map( ( parent ) => breadcrumbs.push({
			link: ( page._pages[ parent ]._url === page._pages[ page._ID ]._url ? undefined : page._pages[ parent ]._url ),
			text: page._pages[ parent ].pagetitle,
	}));

	return (
		<div className="au-grid au-body">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12">
						<div className="guidesbreadcrumbs">
							{
								breadcrumbs.length > 1
									? <Breadcrumbs label="Breadcrumb for this page" items={ breadcrumbs } />
									: null
							}
						</div>
					</div>
				</div>
			</div>
		</div>

	);
}


GuidesBreadcrumbs.propTypes = {};


GuidesBreadcrumbs.defaultProps = {};


export default GuidesBreadcrumbs;
