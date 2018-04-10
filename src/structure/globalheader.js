import PropTypes from 'prop-types';
import React from 'react';

const headerClasses = {
	light: 'globalheader--light',
	dark: 'globalheader--dark',
	white: 'globalheader--white',
	blue: 'globalheader--blue',
};

const headerContentClasses = {
	light: 'globalheader__content--light',
	dark: 'globalheader__content--dark',
	white: 'globalheader__content--white',
	blue: 'globalheader__content--blue',
};

/**
 * The globalheader component
 */
const GlobalHeader = ( page ) => {

	const theme = page._pages[ page._ID ].theme ? page._pages[ page._ID ].theme : 'dark';

	return (
		<div className="au-grid globalheader">
			GOV.AU | An official site
		</div>
	);
};


GlobalHeader.propTypes = {
	/**
	 * text: This is totally official
	 */
	text: PropTypes.string,

	/**
	 * button: An official website
	 */
	button: PropTypes.string.isRequired,

	/**
	 * title1: The .gov.au means its official
	 */
	title1: PropTypes.string.isRequired,

	/**
	 * content1: Lorem ipsum dolor sit amet, vix civibus deserunt te, sit eu nulla discere consulatu, ei graeci consectetuer has.
	 */
	content1: PropTypes.string.isRequired,

	/**
	 * title2: This site is also protected by SSL
	 */
	title2: PropTypes.string.isRequired,

	/**
	 * content2: Lorem ipsum dolor sit amet, vix civibus deserunt te, sit eu nulla discere consulatu, ei graeci consectetuer has.
	 */
	content2: PropTypes.string.isRequired,
};


GlobalHeader.defaultProps = {};


export default GlobalHeader;
