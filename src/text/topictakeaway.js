import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Topic Takeaway component
 */
const TopicTakeaway = ( page ) => {
	return (
	<div className="au-body au-grid" >
		<div className="container-fluid">

			<div className="row">
				<div className="col-md-offset-3 col-md-9">
					<h2 className="au-display-xxl">{ page.heading }</h2>
				</div>
			</div>

			<div className="row">
				<div className="topic-takeaway-container">
					<div className="col-md-offset-3 col-md-4 topic-takeaway-output">
						<h3>{ page.first_column_header }</h3>
						<div className="topic-takeaway-list">{ page.first_column_content }</div>
					</div>
					<div className="col-md-offset-1 col-md-4">
						<h3>{ page.second_column_header }</h3>
						{ page._body }
					</div>
				</div>
			</div>

			<div className="row">
				<div className="topic-takeaway-paginator">
					<div className="col-md-offset-3 col-md-4 topic-takeaway-previous-card">
						{page.previous_header  &&
							<div className="topic-takeaway-card-content">
								<p><span className="topic-takeaway-arrows">&larr;</span> <a rel="prev" href={ page.previous_link }>{ page.previous_header }</a></p>
								<p className="topic-takeaway-gray">&nbsp;&nbsp;&nbsp;&nbsp;{ page.previous_text }</p>
							</div>
						}
					</div>

					<div className="col-md-offset-1 col-md-4 topic-takeaway-next-card">
						{page.next_header  &&
							<div className="topic-takeaway-card-content">
								<p><a rel="next" href={ page.next_link }>{ page.next_header }</a>  <span className="topic-takeaway-arrows">&rarr;</span></p>
								<p className="topic-takeaway-gray">{ page.next_text }&nbsp;&nbsp;&nbsp;&nbsp;</p>
							</div>
						}
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

	/**
	 * previous_text: Develop your strategy phase
	 */

	/**
	 * previous_link: /path
	 */

	/**
	 * next_header: "Do next: Remove content"
	 */

	/**
	 * next_text: Clean up phase
	 */

	/**
	 * next_link: /path
	 */

};


TopicTakeaway.defaultProps = {};


export default TopicTakeaway;
