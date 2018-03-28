import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Topic Takeaway component
 */
const TopicTakeaway = ( page ) => {
	return (
	<div className={ `uikit-body uikit-grid` } >
		<div className="container">

			<div className="row">
				<div className="col-md-12">
					<h2 className="display-3">{ page.heading }</h2>
				</div>
			</div>

			<div className="row">
				<div className="col-md-12">
					<div className="col-md-4 takeawayOutput">
						<h3 className="display-2">{ page.firstcolumnheader }</h3>
						{ page.firstcolumncontent }
					</div>
					<div className="col-md-6 col-md-offset-2">
						<h3 className="display-2">{ page.secondcolumnheader }</h3>
						{ page._body }
					</div>
 				</div>
			</div>

			<div className="row">

				<div className="col-md-12 takeawayPaginator">
					<div className="col-md-4 takeawayPrevCard">
						<div className="takeawayCardContent">
							<p><span className="takeawayArrows">&larr;</span> <a href={ page.previousLink }>{ page.previousHeader }</a></p>
							<p className="takeawayGray">&nbsp;&nbsp;&nbsp;{ page.previousText }</p>
						</div>
					</div>


					<div className="col-md-4 col-md-offset-4 takeawayNextCard">
						<div className="takeawayCardContent">
							<p><a href={ page.nextLink }>{ page.nextHeader }</a>  <span className="takeawayArrows">&rarr;</span></p>
							<p className="takeawayGray">{ page.nextText }&nbsp;&nbsp;&nbsp;</p>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
)};


TopicTakeaway.propTypes = {
	/**
	 * _body: (text)(7)
	 */
	_body: PropTypes.node.isRequired,
};


TopicTakeaway.defaultProps = {};


export default TopicTakeaway;
