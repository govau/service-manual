import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Topic Takeaway component
 */
const TopicTakeaway = ( page ) => {
	return (
	<div className="uikit-body uikit-grid" >
		<div className="container">

			<div className="row">
				<div className="col-md-12">
					<h2 className="display-3">{ page.heading }</h2>
				</div>
			</div>

			<div className="row">
				<div className="col-md-12">
					<div className="col-md-4 topic-takeaway-output">
						<h3 className="display-2">{ page.first_column_header }</h3>
						<div className="topic-takeaway-list">{ page.first_column_content }</div>
					</div>
					<div className="col-md-6 col-md-offset-2">
						<h3 className="display-2">{ page.second_column_header }</h3>
						{ page._body }
					</div>
 				</div>
			</div>

			<div className="row">

				<div className="col-md-12 topic-takeaway-paginator">
					<div className="col-md-4 topic-takeaway-previous-card">
						<div className="topic-takeaway-card-content">
							<p><span className="topic-takeaway-arrows">&larr;</span> <a href={ page.previous_link }>{ page.previous_header }</a></p>
							<p className="topic-takeaway-gray">&nbsp;&nbsp;&nbsp;{ page.previous_text }</p>
						</div>
					</div>


					<div className="col-md-4 col-md-offset-4 topic-takeaway-next-card">
						<div className="topic-takeaway-card-content">
							<p><a href={ page.next_link }>{ page.next_header }</a>  <span className="topic-takeaway-arrows">&rarr;</span></p>
							<p className="topic-takeaway-gray">{ page.next_text }&nbsp;&nbsp;&nbsp;</p>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
)};


TopicTakeaway.propTypes = {
	/**
	 * _body: This is the second body area for this component. The previous one inspect
	 					in an external markdown file.
	 */
	_body: PropTypes.node.isRequired,

	/**
	 * heading: Content strategy output
	 */
	heading: PropTypes.node.isRequired,

	/**
	 * first_column_content: list.md
	 */
	first_column_content: PropTypes.node.isRequired,

	/**
	 * first_column_header: What you'll get
	 */
	first_column_header: PropTypes.node.isRequired,

	/**
	 * second_column_header: What you'll get
	 */
	second_column_header: PropTypes.node.isRequired,

	/**
	 * previous_header: "Do before: Set goals and measure success"
	 */
	previous_header: PropTypes.node.isRequired,

	/**
	 * previous_text: Develop your strategy phase
	 */
	previous_text: PropTypes.node.isRequired,

	/**
	 * previous_link: /path
	 */
	previous_link: PropTypes.node.isRequired,

	/**
	 * next_header: "Do next: Remove content"
	 */
	next_header: PropTypes.node.isRequired,

	/**
	 * next_text: Clean up phase
	 */
	next_text: PropTypes.node.isRequired,

	/**
	 * next_link: /path
	 */
	next_link: PropTypes.node.isRequired

};


TopicTakeaway.defaultProps = {};


export default TopicTakeaway;
