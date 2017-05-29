import React from 'react';
import PropTypes from 'prop-types';


// Styles
import '../../uikit/sass/buttons.scss';
import './section-banner.scss';


/**
 * DEFAULT
 * The Section banner
 *
 * @param  {array}   contents             - Array or current page frontmatter
 * @param  {string}  contents.title       - Page title
 * @param  {string}  contents.abstract    - Page abstract
 * @param  {string}  contents.videoLink   - Link to video
 * @param  {string}  contents.videoTitle  - Title of video link
 */
const SectionBanner = ({ contents }) => (
	<header className="servicemanual-section-header">
		<h1 className="servicemanual-section-header__title">{ contents.title }</h1>
		<p className="servicemanual-section-header__abstract">{ contents.abstract }</p>
		<button className="uikit-btn uikit-btn--tertiary servicemanual-btn__video" href={ contents.videoLink }>{ contents.videoTitle }</button>
	</header>
);

SectionBanner.propTypes = {
	contents: PropTypes.object,
};

export default SectionBanner;
