import PropTypes from 'prop-types';
import React from 'react';

// LOCAL
import Card from './card';


/**
 * The partial component
 */
const Cards = ( page ) => (
	<div className={`au-body au-grid`}>
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-offset-3 col-md-offset-3 col-md-9 col-lg-8 cards">
					<ul className="cards__list">
						{
							page.cards.map( ( card, i ) => (
								<li key={ i } className="col-xs-6 col-md-4 cards__list__item">
									<Card
										preheadline={ card.preheadline }
										link={ card.link }
										background={ card.background }
										image={ card.image }
										headline={ card.headline }
										text={ card.text }
										cta={ card.cta }
									/>
								</li>
							))
						}
					</ul>
				</div>
			</div>

			{ page.cardsLink && <a className="cards__link au-cta-link" href={ `${ page.cardsLink.url }` }>{ page.cardsLink.text }</a> }
		</div>
	</div>
);


Cards.propTypes = {
	/**
	 * cards:
	 *   - image: http://via.placeholder.com/350x150
	 *     headline: Agile delivery
	 *     text: 'How to work in an agile way: principles.'
	 *     link: '#url'
	 *   - headline: Agile delivery
	 *     text: 'How to work in an agile way: principles, tools and governance.'
	 *     link: '#url'
	 *     cta: Read the case study
	 *   - image: http://via.placeholder.com/350x150
	 *     headline: Agile delivery
	 *     text: 'How to work in an agile way: principles, tools and governance. And way more things'
	 *     link: '#url'
	 *     cta: Check it out
	 */
	cards: PropTypes.array.isRequired,

	/**
	 * cardsLink:
	 *   text: View more
	 *   url: /content-strategy/content-auditing
	 */
	cardsLink: PropTypes.shape({
		/**
		 * text: View more
		 */
		text: PropTypes.string.isRequired,

		/**
		 * url: /content-strategy/content-auditing
		 */
		url: PropTypes.string.isRequired
	})
};


Cards.defaultProps = {};


export default Cards;
