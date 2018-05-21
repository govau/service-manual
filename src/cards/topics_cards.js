import PropTypes from 'prop-types';
import Slugify from 'slugify';
import React from 'react';
import Card from '../cards/card';


/**
 * The Topics Cards component
 */

const TopicsCards = ( page ) => {

	return (
		<div className={"au-body" + (page.oddrow ? 'homepagebanner__oddrow' : '')}>

			<div className="container-fluid">
				<div className="row">
					<div className="col-md-3">
						<h2 className="au-display-xl">{ page.heading }</h2>
						<div className="">
							{ page._body }
						</div>
					</div>


					<div className="col-md-6">
						<ul className="cards__list">
							<li className="col-md-6 cards__list__item">
								<Card
									link= { page.card1link }
									background=""
									image=""
									headline= { page.card1headline }
									text= { page.card1text }
									cta=" "
								/>
							</li>
							<li className="col-md-6 cards__list__item">
								<Card
									link= { page.card2link }
									background=""
									image=""
									headline= { page.card2headline }
									text= { page.card2text }
									cta=" "
								/>
							</li>
						</ul>
					</div>

					<div className="col-md-3">
						<a href={ page.viewalllink }>View all topics</a>
					</div>

				</div>
			</div>
		</div>
	)};


TopicsCards.propTypes = {

	/**
	 * _body: (text)(7)
	 */
	_body: PropTypes.node.isRequired,
};


TopicsCards.defaultProps = {};


export default TopicsCards;
