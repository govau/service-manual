import React from "react"
import PropTypes from 'prop-types'

import Page from "../Page"
import SectionBanner from "../../components/SectionBanner"
import SectionNav from "../../components/SectionNav"
import { StickyContainer, Sticky } from 'react-sticky';

const SectionLanding = ( props ) => {
	return (
		<div>
			<SectionBanner contents={props.head}/>
			<StickyContainer>
				<Sticky>
					{
						( { style } ) => {
							return (
								<div style={ style }>
									<SectionNav
										contents={ [{'title': 'Title', 'link': '#anchor-link1'},{'title': 'Title', 'link': '#anchor-link2'}] }>
									</SectionNav>
								</div>
							)
						}
					}
				</Sticky>
				<Page { ...props }>
				</Page>
			</StickyContainer>
		</div>
	)
}

SectionBanner.propTypes = {
	head: PropTypes.object,
}

export default SectionLanding
