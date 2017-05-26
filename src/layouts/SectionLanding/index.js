import React from "react"

import Page from "../Page"
import SectionNav from "../../components/SectionNav"
import { BodyContainer, joinUri } from "phenomic"
import { StickyContainer, Sticky } from 'react-sticky';

const SectionLanding = ( props ) => {
	return (
		<div>
			<h1>{props.head.title}</h1>
			<p>{props.head.abstract}</p>
			<a href={props.head.videoLink}>{props.head.videoTitle}</a>
			<StickyContainer>
				<Sticky>
					{
						( { style } ) => {
							return (
								<div style={ style }>
									<SectionNav
										contents={ [{'title': 'Title', 'link': '#anchor-link'},{'title': 'Title', 'link': '#anchor-link'}] }>
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

export default SectionLanding
