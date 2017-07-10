import PropTypes from 'prop-types';
import React from 'react';


/**
 * The card component
 *
 * @disable-docs
 */
const Card = ({ link, background, image, headline, text, cta }) => (
	<a href={ link } className='cards' style={{ backgroundColor: background }}>
		{ image && <img className='cards__image' src={ image } alt="" /> }
		<strong className='cards__headline'>{ headline }</strong>
		<div className='cards__text'>{ text }</div>
		<span className='cards__cta'>{ cta }</span>
	</a>
);


Card.propTypes = {
	/**
	 * link: #
	 */
	link: PropTypes.string.isRequired,

	/**
	 * background: #1b7991
	 */
	background: PropTypes.string,

	/**
	 * image: http://via.placeholder.com/350x150
	 */
	image: PropTypes.string,

	/**
	 * headline: Agile delivery
	 */
	headline: PropTypes.string.isRequired,

	/**
	 * text: (text)(2)
	 */
	text: PropTypes.string.isRequired,

	/**
	 * cta:
	 */
	cta: PropTypes.string,
};


Card.defaultProps = {
	background: '#fff',
};


export default Card;
