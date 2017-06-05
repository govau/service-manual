import React from 'react';
import PropTypes from 'prop-types';


// Styles
import './content.scss';


// Component
const Content = ({ children }) => (
	<main>
		{ children }
	</main>
);

Content.propTypes = {
	children: PropTypes.node,
};

export default Content;
