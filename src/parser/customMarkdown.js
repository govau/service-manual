import remark from "remark";
// import slug from "remark-slug";
// import autoLinkHeadings from "remark-autolink-headings";
// import highlight from "remark-highlight.js";
// import toc from "remark-toc";
import html from "remark-html";

import externalLinks from "remark-external-links";

// import CustomMD from "./custom-unist";


// Component
const Render = ( body ) => {
	return remark()
		// .use( CustomMD )

		// // https://github.com/wooorm/remark-slug
		// .use( slug )

		// // https://github.com/ben-eb/remark-autolink-headings
		// .use(
		// 	autoLinkHeadings,
		// 	{
		// 		content: {
		// 			type: "text",
		// 			value: "#",
		// 		},
		// 		linkProperties: {
		// 			className: "phenomic-HeadingAnchor",
		// 		},
		// 	}
		// )

		// https://github.com/wooorm/remark-html
		.use(
			html,
			{
				entities: "escape"
			}
		)

		// // https://github.com/ben-eb/remark-highlight.js
		// .use( highlight )

		// // https://github.com/wooorm/remark-toc
		// .use( toc )


		// https://github.com/xuopled/remark-external-links
		.use(
			externalLinks,
			{
				target: null,
				rel: "external",
			}
		)

		// render
		.process(
			body,
			{
				commonmark: true,
			}
		)
		.toString();
};

export default Render;
