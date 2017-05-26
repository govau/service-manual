import React from "react"
import { Route } from "react-router"
import { PageContainer as PhenomicPageContainer } from "phenomic"

import AppContainer from "./AppContainer"
import Page from "./layouts/Page"
import PageError from "./layouts/PageError"
import Homepage from "./layouts/Homepage"
import SectionLanding from "./layouts/SectionLanding"

const PageContainer = (props) => (
	<PhenomicPageContainer
		{ ...props }
		layouts={{
			Page,
			PageError,
			Homepage,
			SectionLanding,
		}}
	/>
)

export default (
	<Route component={ AppContainer }>
		<Route path="*" component={ PageContainer } />
	</Route>
)
