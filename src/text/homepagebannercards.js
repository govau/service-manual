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

				<div className="row au-grids cards guideshomepagecards">
					<ul className="cards__list">
						<li className="col-sm-4 cards__list__item">
							<Card
								link="/content-strategy/"
								background=""
								image=""
								headline="Content Strategy Guide"
								text="Content strategy comes before you design your content. This sets the foundation to create, deliver and govern content."
								cta=" "
							/>
						</li>
						<li className="col-sm-4 cards__list__item">
							<Card
								link="https://guides.service.gov.au/content-guide/"
								background=""
								image=""
								headline="Content Guide"
								text="A guide to help Australian Government teams design simple, clear and fast content."
								cta=" "
							/>
						</li>
						<li className="col-sm-4 cards__list__item">
							<Card
								link="https://designsystem.gov.au/"
								background=""
								image=""
								headline="Design System"
								text="A framework and set of tools to help build accessible products and services."
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
