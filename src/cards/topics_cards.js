import PropTypes from 'prop-types';
import Slugify from 'slugify';
import React from 'react';
import Card from '../cards/card';
import AUctaLink from '../../scripts/uikit/cta-link';


/**
 * The Topics Cards component
 */

const TopicsCards = ( page ) => {

	return (
		<div className={"au-body topicscards " + (page.oddrow ? 'homepagebanner__oddrow' : '')}>

			<div className="container-fluid">
				<div className="row">
					<div className="col-md-3 topicscards__intro">
						<h2 className="au-display-xl topicscards__headline">{ page.heading }</h2>
						<div className="topicscards__tagline">
							{ page._body }
						</div>
					</div>


					<div className="col-md-6 cards cards--home">
						<ul className="cards__list">
							<li className="col-xs-6 cards__list__item">
								<Card
									link= { page.card1link }
									background=""
									image=""
									headline= { page.card1headline }
									text= { page.card1text }
									cta=" "
								/>
							</li>
							<li className="col-xs-6 cards__list__item">
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

					<div className="col-md-offset-1 col-md-2 topicscards__viewall">
						<a className="au-cta-link" href={ page.viewalllink }>View all topics</a>
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
