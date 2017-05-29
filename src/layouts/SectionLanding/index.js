import React from 'react';
import PropTypes from 'prop-types';
import Page from '../Page';
import SectionBanner from '../../components/SectionBanner';
import SectionNav from '../../components/SectionNav';
import RelatedCriteria from '../../components/RelatedCriteria';
import { StickyContainer, Sticky } from 'react-sticky';


// Styles
import './section-landing.scss';


// component
const SectionLanding = ( props ) => {
	return (
		<div>
			<SectionBanner contents={ props.head }/>
			<StickyContainer>
				<Sticky>
					{
						({ style }) => {
							return (
								<div className="servicemanual-sticky-container" style={ style }>
									<SectionNav contents={[
										{
											'title': 'Title',
											'link': '#anchor-link1'
										},
										{
											'title': 'Title',
											'link': '#anchor-link2'
										}
									]} />
								</div>
							)
						}
					}
				</Sticky>
				<div className="container">
					<div className="row">
						<div className="grids col-sm-8">
							<Page { ...props }>
							</Page>
						</div>

						<div className="grids col-sm-4">
							<RelatedCriteria contents={ props.head.criteria } />
						</div>
					</div>
				</div>
			</StickyContainer>
		</div>
	);
};

SectionLanding.propTypes = {
	head: PropTypes.object,
};

export default SectionLanding;
