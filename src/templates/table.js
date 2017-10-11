import PropTypes from 'prop-types';
import React from 'react';



const Table = ( page ) => {

	const table = page.table.map((items, index) => {

		if ( index == 0 ) {
			return <thead><tr colspan="2">  <th scope="col" > <h3>{ items[0 ] }</h3> </th> </tr></thead>
		} else {

			const i = items.map(( item ) => {
				console.log(item);
				return <td scope="col"> { item } </td>
			});

			return ( <tr>
				{ i }
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
