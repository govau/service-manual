module.exports = {
		federate: function(docsArray,pathsArray,index) {
		let pageid = index;

		// Design System
		document = new Object();
		pathmapitem = new Object();
		document.title = "Design System";
		document.description = "The Australian Government Design System provides a framework and a set of tools to help designers and developers build government products and services more easily. CSS Javascript UI";
		pathmapitem.description = "The Australian Government Design System provides a framework and a set of tools to help designers and developers build government products and services more easily.";
		pathmapitem.title = "Design System";
		pageid = pageid + 1;
		document.id = pageid;
		pathmapitem.id = pageid;
		pathmapitem.path = "https://designsystem.gov.au/";
		docsArray.push(document);
		pathsArray.push(pathmapitem);
		console.log("Adding federated page: " + pathmapitem.path);

		// Design System - components
		document = new Object();
		pathmapitem = new Object();
		document.title = "Components";
		document.description = "CSS UI Kit UiKit Javascript React Grid Accordion Header Footer Nav Navigation Text Input Button Form Link Skip Link Tag Select Breadcrumbs Here you can find design and development files for each component, findings we’ve collected from performing user research as well as documentation to help teams adopt the design system for their projects.";
		pathmapitem.description = "Here you can find design and development files for each component, findings we’ve collected from performing user research as well as documentation to help teams adopt the design system for their projects.";
		pathmapitem.title = "Components";
		pageid = pageid + 1;
		document.id = pageid;
		pathmapitem.id = pageid;
		pathmapitem.path = "https://designsystem.gov.au/components/";
		docsArray.push(document);
		pathsArray.push(pathmapitem);
		console.log("Adding federated page: " + pathmapitem.path);

		// Content Guide
		document = new Object();
		pathmapitem = new Object()
		document.title = "Content Guide";
		document.description = "A guide to help Australian Government teams design simple, clear and fast content.";
		pathmapitem.description = "A guide to help Australian Government teams design simple, clear and fast content.";
		pathmapitem.title = "GOV.AU Content Guide";
		pageid = pageid + 1;
		document.id = pageid;
		pathmapitem.id = pageid;
		pathmapitem.path = "https://guides.service.gov.au/content-guide/";
		docsArray.push(document);
		pathsArray.push(pathmapitem);
		console.log("Adding federated page: " + pathmapitem.path);

		// Content Guide - Content structure
		document = new Object();
		pathmapitem = new Object();
		document.title = "Content structure";
		document.description = "Structure content to make it easy for the user to find what they need.";
		pathmapitem.description = "Structure content to make it easy for the user to find what they need.";
		pathmapitem.title = "Content structure";
		pageid = pageid + 1;
		document.id = pageid;
		pathmapitem.id = pageid;
		pathmapitem.path = "https://guides.service.gov.au/content-guide/content-structure/";
		docsArray.push(document);
		pathsArray.push(pathmapitem);
		console.log("Adding federated page: " + pathmapitem.path);

		// Content Guide - Writing style
		document = new Object();
		pathmapitem = new Object();
		document.title = "Writing style";
		document.description = "Writing for digital is different to writing for print. Content must be user-focused, scannable and accessible across all devices.";
		pathmapitem.description = "Writing for digital is different to writing for print. Content must be user-focused, scannable and accessible across all devices.";
		pathmapitem.title = "Writing style";
		pageid = pageid + 1;
		document.id = pageid;
		pathmapitem.id = pageid;
		pathmapitem.path = "https://guides.service.gov.au/content-guide/writing-style/";
		docsArray.push(document);
		pathsArray.push(pathmapitem);
		console.log("Adding federated page: " + pathmapitem.path);

		// Content Guide - Accessibility and inclusivity
		document = new Object();
		pathmapitem = new Object();
		document.title = "Accessibility and inclusivity";
		document.description = "Design content so everyone can use it.";
		pathmapitem.description = "Design content so everyone can use it.";
		pathmapitem.title = "Accessibility and inclusivity";
		pageid = pageid + 1;
		document.id = pageid;
		pathmapitem.id = pageid;
		pathmapitem.path = "https://guides.service.gov.au/content-guide/accessibility-inclusivity/";
		docsArray.push(document);
		pathsArray.push(pathmapitem);
		console.log("Adding federated page: " + pathmapitem.path);

		// Content Guide - Punctuation and grammar
		document = new Object();
		pathmapitem = new Object();
		document.title = "Punctuation and grammar";
		pathmapitem.title = "Punctuation and grammar";
		document.description = "Use minimal punctuation.";
		pathmapitem.description = "Use minimal punctuation.";
		pageid = pageid + 1;
		document.id = pageid;
		pathmapitem.id = pageid;
		pathmapitem.path = "https://guides.service.gov.au/content-guide/punctuation-grammar/";
		docsArray.push(document);
		pathsArray.push(pathmapitem);
		console.log("Adding federated page: " + pathmapitem.path);

		// Content Guide - Terms and phrases
		document = new Object();
		pathmapitem = new Object();
		document.title = "Terms and phrases";
		pathmapitem.title = "Terms and phrases";
		document.description = "Use consistent terms and phrases to help users find what they need.";
		pathmapitem.description = "Use consistent terms and phrases to help users find what they need.";
		pathmapitem.path = "https://guides.service.gov.au/content-guide/terms-phrases/";
		pageid = pageid + 1;
		document.id = pageid;
		pathmapitem.id = pageid;
		docsArray.push(document);
		pathsArray.push(pathmapitem);
		console.log("Adding federated page: " + pathmapitem.path);

		// Content Guide - Numbers and measurements
		document = new Object();
		pathmapitem = new Object();
		document.boostvalue = 0;
		document.title = "Numbers and measurements";
		pathmapitem.title = "Numbers and measurements";
		document.description = "Numbers are easier to read on a screen than words, so use them where possible.";
		pathmapitem.description = "Numbers are easier to read on a screen than words, so use them where possible.";
		pathmapitem.path = "https://guides.service.gov.au/content-guide/numbers-measurements/";
		pageid = pageid + 1;
		document.id = pageid;
		pathmapitem.id = pageid;
		docsArray.push(document);
		pathsArray.push(pathmapitem);
		console.log("Adding federated page: " + pathmapitem.path);

		// Content Guide - Formatting
		document = new Object();
		pathmapitem = new Object();
		document.title = "Formatting";
		pathmapitem.title = "Formatting";
		document.description = "Use formatting carefully to make content easier to scan.";
		pathmapitem.description = "Use formatting carefully to make content easier to scan.";
		pathmapitem.path = "https://guides.service.gov.au/content-guide/formatting/";
		pageid = pageid + 1;
		document.id = pageid;
		pathmapitem.id = pageid;
		docsArray.push(document);
		pathsArray.push(pathmapitem);
		console.log("Adding federated page: " + pathmapitem.path);

		// Content Guide - Types of content
		document = new Object();
		pathmapitem = new Object();
		document.title = "Types of content";
		pathmapitem.title = "Types of content";
		document.description = "Present content in the most useful and accessible format for the user.";
		pathmapitem.description = "Present content in the most useful and accessible format for the user.";
		pathmapitem.path = "https://guides.service.gov.au/content-guide/types-of-content/";
		pageid = pageid + 1;
		document.id = pageid;
		pathmapitem.id = pageid;
		docsArray.push(document);
		pathsArray.push(pathmapitem);
		console.log("Adding federated page: " + pathmapitem.path);

		// Content Guide - Types of content
		document = new Object();
		pathmapitem = new Object();
		document.title = "Writing for search engines";
		pathmapitem.title = "Writing for search engines";
		document.description = "SEO Learn how to write content for government websites with users and search engines in mind. Use search engine optimisation (SEO) writing techniques to help users find the information they need.";
		pathmapitem.description = "Learn how to write content for government websites with users and search engines in mind. Use search engine optimisation (SEO) writing techniques to help users find the information they need.";
		pathmapitem.path = "https://guides.service.gov.au/content-guide/search-engines/";
		pageid = pageid + 1;
		document.id = pageid;
		pathmapitem.id = pageid;
		docsArray.push(document);
		pathsArray.push(pathmapitem);
		console.log("Adding federated page: " + pathmapitem.path);

		// Digital Learning Design Standards
		document = new Object();
		pathmapitem = new Object();
		document.title = "Digital Learning Design Standards";
		pathmapitem.title = document.title;
		document.description = "These learning design standards (LDS) are blueprints for learning and development and will guide APS training for digital skills.";
		pathmapitem.description = document.description;
		pathmapitem.path = "https://govau.github.io/learning-design-standards/";
		pageid = pageid + 1;
		document.id = pageid;
		pathmapitem.id = pageid;
		docsArray.push(document);
		pathsArray.push(pathmapitem);
		console.log("Adding federated page: " + pathmapitem.path);

		// Service Handbook
		document = new Object();
		pathmapitem = new Object();
		document.title = "Service Handbook";
		pathmapitem.title = document.title;
		document.description = "Build excellent digital services. We're sharing our approach for building digital services that start with user needs, iterate quickly, and meet the Digital Service Standard.";
		pathmapitem.description = document.description;
		pathmapitem.path = "https://ausdto.github.io/service-handbook/";
		pageid = pageid + 1;
		document.id = pageid;
		pathmapitem.id = pageid;
		docsArray.push(document);
		pathsArray.push(pathmapitem);
		console.log("Adding federated page: " + pathmapitem.path);

		// Service Handbook - Discovery
		document = new Object();
		pathmapitem = new Object();
		document.title = "Discovery Handbook";
		pathmapitem.title = document.title;
		document.description = "This is a handbook to help teams going through the Discovery stage of the service delivery process. We’ve written it from our experience helping agencies run discoveries as part of our Digital Transformation Programme.";
		pathmapitem.description = document.description;
		pathmapitem.path = "http://ausdto.github.io/service-handbook/discovery/";
		pageid = pageid + 1;
		document.id = pageid;
		pathmapitem.id = pageid;
		docsArray.push(document);
		pathsArray.push(pathmapitem);
		console.log("Adding federated page: " + pathmapitem.path);

		// Service Handbook - Discovery
		document = new Object();
		pathmapitem = new Object();
		document.title = "Alpha Handbook";
		pathmapitem.title = document.title;
		document.description = "This guide is intended to help teams going through the Alpha stage of the service delivery process. It describes the DTO’s recommended approach to Alpha, drawing on our experiences from working with projects in the Digital Transformation Programme.";
		pathmapitem.description = document.description;
		pathmapitem.path = "http://ausdto.github.io/service-handbook/alpha/";
		pageid = pageid + 1;
		document.id = pageid;
		pathmapitem.id = pageid;
		docsArray.push(document);
		pathsArray.push(pathmapitem);
		console.log("Adding federated page: " + pathmapitem.path);

		// Service Handbook - Capabilities
		document = new Object();
		pathmapitem = new Object();
		document.title = "Capabilities Handbook";
		pathmapitem.title = document.title;
		document.description = "This is the first release of our capability model. We’ve focussed on the capabilities for technical delivery but over time we’ll be extending it to cover other digital delivery skills such as design, product management and user research.";
		pathmapitem.description = document.description;
		pathmapitem.path = "http://ausdto.github.io/service-handbook/capability/";
		pageid = pageid + 1;
		document.id = pageid;
		pathmapitem.id = pageid;
		docsArray.push(document);
		pathsArray.push(pathmapitem);
		console.log("Adding federated page: " + pathmapitem.path);


	}
}
