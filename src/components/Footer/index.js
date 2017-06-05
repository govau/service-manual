import React from 'react';


// Styles
import '../../uikit/sass/footer.scss';
import './footer.scss';


// Component
const Footer = () => (
	<footer className="uikit-footer" role="content-info">
		<div className="container">
			<div className="uikit-footer__end">
				<img className="uikit-responsive-media-img" src="/assets/coat-of-arms.png" height="100" alt="Commonwealth Coat of Arms crest logo" />
				<p>
					<small>&copy; Commonwealth of Australia</small>
				</p>
			</div>
		</div>
	</footer>
);

export default Footer;
