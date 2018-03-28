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
					<h1>{ page.heading }</h1>
					<div className="col-md-4">
						<h2>What you&#39;ll get</h2>
						{ page._body }
					</div>
					<div className="col-md-8">
						<h2>What to do</h2>
						{ page.whatToDoText }
						<p>
							<a href="{ page.whatToDoLink }">
								{ page.whatToDoLinkText }
							</a>
						</p>
					</div>
 				</div>
			</div>
			<div className="row">

				<div className="col-md-12">
					<div className="col-md-4 nextPrevCard">
						<p><a href="">{ page.previousHeader }</a></p>
						<p>{ page.previousText }</p>
					</div>

					<div className="col-md-4">
						<p><strong>{ page.middleHeading }</strong></p>
						<p>{ page.middleText }</p>
					</div>

					<div className="col-md-4 nextPrevCard">
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
