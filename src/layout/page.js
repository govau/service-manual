import React from "react";

export default ( page ) => (
	<html>
	<head>
		<title>Service manual - { page.title }</title>

		<link rel="stylesheet" href={ `/assets/css/site.css` } />
		{ page.stylesheet != undefined
			? ( <link rel="stylesheet" href={ `/assets/css/${ page.stylesheet }.css` } /> )
			: null
		}
	</head>
	<body>
		{ page._partials }
	</body>
	</html>
);
