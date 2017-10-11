import PropTypes from 'prop-types';
import React from 'react';


const Table = ( page ) => {

	const table = page.table.map((items, index) => {

		if ( index == 0 ) {
			return <thead><tr colspan="2"> <th scope="col" > <h4>{ items[0 ] }</h4> </th> </tr></thead>
		} else {
			return ( <tr>
				{ items.map(( item ) => {
					return (
						<td scope="col">
								{
									item.split("\n").map(i => {
										return <div>{ i }</div>;
									})
								}
						</td>
					);
				}) }
			</tr>
			);
		}
	})

	return (
		<div className="uikit-body uikit-grid table">
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<table className="content-table" >
							{ table }
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};


Table.propTypes = {
	/**
	 * table: tables key values
	 */
	table: PropTypes.string,
};


Table.defaultProps = {};


export default Table;
