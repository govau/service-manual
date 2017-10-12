import PropTypes from 'prop-types';
import React from 'react';


const Table = ( page ) => {

	const table = page.table.map((items, index) => {

		if ( index == 0 ) {
			return <thead key={ index }><tr colspan="2"><th scope="col" ><h4>{ items[0 ] }</h4></th></tr></thead>
		} else {
			return (<tbody key={ index }><tr>
				{ items.map(( item, index ) => {
					return (
						<td scope="col" key={ index }>
								{
									page._parseMD(item.replace(/(?:\r\n|\r|\n)/g, '<br />\n'))
								}
						</td>
					);
				}) }
			</tr>
			</tbody>
			);
		}
	})

	return (
		<div className="uikit-body uikit-grid table template-table">
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
	* 	table:
	*          -
	*            - |
	*                Quality content checks
	*          -
	*            - |
	*                **Factual accuracy and relevance**
	*            - |
	*                Subject matter expert to complete
	*          -
	*            - |
	*                **Product objectives**
	*            - |
	*                Content owner to complete
	*          -
	*            - |
	*                **Legislative requirement**
	*            - |
	*                Legal to complete
	*          -
	*            - |
	*                **SEO and metadata**
	*                - meta description is engaging
	*                - URL is SEO-friendly
	*            - |
	*                Web usability expert to complete
	**/
	table: PropTypes.array,
};


Table.defaultProps = {};


export default Table;
