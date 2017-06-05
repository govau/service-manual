import React from 'react';


// Styles
import '../../uikit/sass/header.scss';
import './header.scss';


// Component
const Header = () => (
	<header className="uikit-header uikit-header--dark" role="banner">
		<div className="container">
			<h1 className="uikit-header-heading">Service manual global header</h1>
		</div>
	</header>
);

export default Header;
