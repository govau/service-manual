import PropTypes from 'prop-types';
import React from 'react';


/**
 * The topic layout component
 */
const Topic = ( page ) => (
	<html>
	<head>
		<title>Service manual - { page.title }</title>

		<meta http-equiv="x-ua-compatible" content="ie=edge" />

		<link rel="stylesheet" href={ `/assets/css/site.css` } />
		{ page.stylesheet != undefined
			? ( <link rel="stylesheet" href={ `/assets/css/${ page.stylesheet }.css` } /> )
			: null
		}
		<script src="/assets/js/no-js.js" />
		<script src="/assets/js/svg4everybody.min.js" />
	</head>
	<body>
		<main>
			{ page.main }
		</main>

		{ page.footer }

		<script src="/assets/js/site.js" />
		{ page.script != undefined
			? ( <script rel="stylesheet" href={ `/assets/js/${ page.script }.js` } /> )
			: null
		}
	</body>
	</html>
);


Topic.propTypes = {
	/**
	 * main: (partials)(5)
	 */
	main: PropTypes.node.isRequired,

	/**
	 * footer: (partials)(2)
	 */
	footer: PropTypes.node.isRequired,
};


Topic.defaultProps = {};


export default Topic;
