import PropTypes from 'prop-types';
import Slugify from 'slugify';
import React from 'react';
import Card from '../cards/card';


/**
 * The HomepageBannerCards component
 */

const HomepageBannerCards = ( page ) => {

	return (
		<div className={"au-body homepagebanner__lastrow homepagebanner " + (page.oddrow ? 'homepagebanner__oddrow' : '')}>

			<div className="container">
				<div className="row">
					<div className="col-xs-12 homepagebanner__container">
						<h2 className="au-display-xxxl">{ page.heading }</h2>
						<div className="homepagebanner__paragraphcontainer">
							{ page._body }
						</div>
					</div>
				</div>

				<div className="row cards cards--home">
					<ul className="cards__list">
						<li className="col-sm-4 cards__list__item">
							<Card
								link= { page.card1link }
								background=""
								image=""
								headline= { page.card1headline }
								text= { page.card1text }
								cta=" "
							/>
						</li>
						<li className="col-sm-4 cards__list__item">
							<Card
								link= { page.card2link }
								background=""
								image=""
								headline= { page.card2headline }
								text= { page.card2text }
								cta=" "
							/>
						</li>
						<li className="col-sm-4 cards__list__item">
							<Card
								link= { page.card3link }
								background=""
								image=""
								headline= { page.card3headline }
								text= { page.card3text }
								cta=" "
							/>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)};


HomepageBannerCards.propTypes = {

	/**
	 * _body: (text)(7)
	 */
	_body: PropTypes.node.isRequired,
};


HomepageBannerCards.defaultProps = {};


export default HomepageBannerCards;
