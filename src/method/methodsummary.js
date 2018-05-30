import PropTypes from 'prop-types';
 import React from 'react';


/**
 * The Method Summary component
 */
const MethodSummary = ( page ) => {
	return (
	<div className="au-body au-grid" >
		<div className="container-fluid">
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
		</div>
	</div>
)};


MethodSummary.propTypes = {
	/**
	 * _body: (text)(7)
	 */
	_body: PropTypes.node.isRequired,
};


MethodSummary.defaultProps = {};


export default MethodSummary;
