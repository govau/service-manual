import PropTypes from 'prop-types';
import React from 'react';

// LOCAL
import Card from './card';


/**
 * Cards group with a Heading and tagline
 */
const CardsWithIntro = ( page ) => (
	<div className="au-body au-grid">
		<div className="container-fluid">
			<div className="row">
				<div className={"col-md-offset-3 col-md-9 cards cardswithintro__container "+ (page.oddrow ? 'homepagebanner__oddrow cardswithintro__oddrow' : '')}>
					<div className="col-lg-3 cardswithintro__intro">
						<h2>{ page.intro_heading }</h2>
						<p>{ page.intro_tagline }</p>
					</div>
					<div className="col-lg-7">
						<ul className="cards__list">
							{
								page.cards.map( ( card, i ) => (
									<li key={ i } className="col-xs-6 col-md-6 cards__list__item">
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
			</div>

			{ page.cardsLink && <a className="cards__link au-cta-link" href={ `${ page.cardsLink.url }` }>{ page.cardsLink.text }</a> }
		</div>
	</div>
);


CardsWithIntro.propTypes = {
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


CardsWithIntro.defaultProps = {};


export default CardsWithIntro;
