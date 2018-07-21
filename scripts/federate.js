module.exports = {
		federate: function(docsArray,pathsArray,index) {
		let pageid = index;

		// Design System
		document = new Object();
		pathmapitem = new Object();
		document.boostvalue = 10;
		document.title = "Design System Design System Design System Design System Design System";
		document.description = "Design System Design System Design System Design System Design System  UI UIkit component layout Front End Toolkit react patterns button accordion grid forms css javascript style guide";
		pathmapitem.description = "The Australian Government Design System provides a framework and a set of tools to help designers and developers build government products and services more easily.";
		pathmapitem.title = "Design System";
		pageid = pageid + 1;
		document.id = pageid;
		pathmapitem.id = pageid;
		pathmapitem.path = "https://designsystem.gov.au/";
		docsArray.push(document);
		pathsArray.push(pathmapitem);

		// Content Guide
		document = new Object();
		pathmapitem = new Object()
		document.boostvalue = 10;
		document.title = "Content Guide Content Guide Content Guide Content Guide";
		document.description = "Content Guide Content Guide Content Guide Content Guide A guide to help Australian Government teams design simple, clear and fast content.";
		pathmapitem.description = "A guide to help Australian Government teams design simple, clear and fast content.";
		pathmapitem.title = "GOV.AU Content Guide";
		pageid = pageid + 1;
		document.id = pageid;
		pathmapitem.id = pageid;
		pathmapitem.path = "https://guides.service.gov.au/content-guide/";
		docsArray.push(document);
		pathsArray.push(pathmapitem);

		// Content Guide - Content structure
		document = new Object();
		pathmapitem = new Object();
		document.boostvalue = 10;
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

		// Content Guide - Accessibility and inclusivity
		document = new Object();
		pathmapitem = new Object();
		document.boostvalue = 10;
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



	}
}
