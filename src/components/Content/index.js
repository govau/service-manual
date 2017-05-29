import React from 'react';
import PropTypes from 'prop-types';


// Styles
import './content.scss';


// component
const Content = (props) => (
	<main>
		{ props.children }
	</main>
);

Content.propTypes = {
	children: PropTypes.node,
};

export default Content;
