import PropTypes from 'prop-types';
 import React from 'react';


/**
 * The Method Summary component
 */
const MethodSummary = ( page ) => {
	return (
	<div className="au-body au-grid container-fluid method" >

		<div className="row">
			<div className="col-md-offset-3 col-md-9 methodsummary">
				<div className="methodsummary__container">
					<table className="methodsummary__table">
						<tr>
							<th>Prep time</th>
							<th>People</th>
							<th>Run time</th>
						</tr>
						<tr>
							<td>{ page.preptime }</td>
							<td>{ page.people }</td>
							<td>{ page.runtime }</td>
						</tr>
					</table>
				</div>
				</div>
		</div>

		<div className="row">
			<div className="col-md-offset-3 col-md-6 methoddetail">
				<h2>Preparation</h2>
				<p>{ page._body }</p>
			</div>
			<div className="col-md-3 methodmaterials">
				<h2>Materials</h2>
				<p>{ page.materials }</p>
			</div>
		</div>

	</div>
)};


MethodSummary.propTypes = {
	/**
	 * _body: (text)(7)
	 */
	_body: PropTypes.node.isRequired,

	/**
	* preptime: 2 hours
	*/
	preptime: PropTypes.string.isRequired,

	/**
	* people: 3 to 6
	*/
	people: PropTypes.node.isRequired,

	/**
		 * runtime: 2 - 3 hours
	*/
	runtime: PropTypes.string.isRequired
};


MethodSummary.defaultProps = {};


export default MethodSummary;
