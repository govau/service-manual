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
					<div className="col-md-4 takeawayOutput">
						<h2 className="display-2">What you&#39;ll get</h2>
						<ul>
							{page.whatYoullGet.map(function(value){
								return <li>{value}</li>
							})}
						</ul>
					</div>
					<div className="col-md-2"> </div>
					<div className="col-md-6">
						<h2 className="display-2">What to do</h2>
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

					<div className="col-md-4 centerTakeaway">

					</div>

					<div className="col-md-4 takeawayNextCard">
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


SupportingTakeaway.propTypes = {
	/**
	 * _body: (text)(7)
	 */
	_body: PropTypes.node.isRequired,
};


SupportingTakeaway.defaultProps = {};


export default SupportingTakeaway;
