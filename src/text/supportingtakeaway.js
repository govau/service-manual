import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Supporting Takeaway component
 */
const SupportingTakeaway = ( page ) => {
	return (
	<div className={ `uikit-body uikit-grid` } >
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<h1 className="display-3">{ page.heading }</h1>
					<div className="col-md-4">
						<h2>What you&#39;ll get</h2>
						{ page._body }
					</div>
					<div className="col-md-8">
						<h2>What to do</h2>
						{ page.whatToDoText }
						<p className="takeawayWhattodoLink">
							<a href={ page.whatToDoLink }>
								{ page.whatToDoLinkText }
							</a>
						</p>
					</div>
 				</div>
			</div>
			<div className="row">

				<div className="col-md-12 takeawayPaginator">
					<div className="col-md-4 takeawayPrevCard">
						<p><a href="">{ page.previousHeader }</a></p>
						<p>{ page.previousText }</p>
					</div>

					<div className="col-md-4 centerTakeaway">
						<p><strong>{ page.middleHeading }</strong></p>
						{ page.middleText }
					</div>

					<div className="col-md-4 takeawayNextCard">
						<p><a href="">{ page.nextHeader }</a></p>
						<p>{ page.nextText }</p>
					</div>
				</div>

			</div>
		</div>
	</div>
)};


SupportingTakeaway.propTypes = {
	/**
	 * _body: (text)(7)
	 */
	_body: PropTypes.node.isRequired,
};


SupportingTakeaway.defaultProps = {};


export default SupportingTakeaway;
