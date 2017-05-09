import React from "react"
import PropTypes from 'prop-types'

import Page from "../Page"

import "./page-error.scss"

const PageError = ({ error, errorText }) => (
	<Page head={{ hero: "https://farm8.staticflickr.com/7559/16101654539_bee5151340_k.jpg" }}>
		<div className="page-error">
			<div className="oops">{ "😱 Oooops!" }</div>
			<div className="text">
				<p className="message">
					<strong>{ error }</strong>
					{ " " }
					{ errorText }
				</p>
				{
					error === 404 &&
					<div>
						{ "It seems you found a broken link. " }
						{ "Sorry about that. " }
						<br />
						{ "Do not hesitate to report this page 😁." }
					</div>
				}
			</div>
		</div>
	</Page>
)

PageError.propTypes = {
	error: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
	errorText: PropTypes.string,
}

PageError.defaultProps = {
	error: 404,
	errorText: "Page Not Found",
}

export default PageError
