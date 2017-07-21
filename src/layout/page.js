import PropTypes from 'prop-types';
import React from 'react';


/**
 * The page layout component
 */
const Page = ( page ) => (
	<html>
	<head>
		<title>Guides - { page.title }</title>

		<meta http-equiv="x-ua-compatible" content="ie=edge" />

		<link rel="stylesheet" href={ `/assets/css/site.css` } />
		{ page.stylesheet != undefined
			? ( <link rel="stylesheet" href={ `/assets/css/${ page.stylesheet }.css` } /> )
			: null
		}
		<script src="/assets/js/analytics.js" />
		<script src="/assets/js/no-js.js" />
		<script src="/assets/js/svg4everybody.min.js" />
	</head>
	<body>
		<header className="uikit-body uikit-grid">
			{ page.header }
		</header>

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


Page.propTypes = {
	/**
	 * main: (partials)(5)
	 */
	main: PropTypes.node.isRequired,

	/**
	 * footer: (partials)(2)
	 */
	footer: PropTypes.node.isRequired,
};


Page.defaultProps = {};


export default Page;
