import path from "path"

import PhenomicLoaderSitemapWebpackPlugin from "phenomic/lib/loader-sitemap-webpack-plugin";
import PhenomicLoaderFeedWebpackPlugin from "phenomic/lib/loader-feed-webpack-plugin";
import ExtractTextPlugin from "extract-text-webpack-plugin";
import { phenomicLoader } from "phenomic";
import Autoprefixer from "autoprefixer";
import webpack from "webpack";

import Render from "./src/parser/customMarkdown";

import pkg from "./package.json"

const ExtractSass = new ExtractTextPlugin({
	filename: "[name].[contenthash].css",
	disable: process.env.NODE_ENV === "development"
});

export default ( config = {} ) => {

	return {
		...config.dev && {
			devtool: "#cheap-module-eval-source-map",
		},
		module: {
			noParse: /\.min\.js/,
			rules: [
				// *.md => consumed via phenomic special webpack loader
				// allow to generate collection and rss feed.
				{
					// phenomic requirement
					test: /\.(md|markdown)$/,
					loader: phenomicLoader,
					query: {
						context: path.join(__dirname, config.source),
						plugins: [
							...require("phenomic/lib/loader-preset-default").default,
							require("phenomic/lib/loader-plugin-markdown-init-head.description-property-from-content").default,
							// require("phenomic/lib/loader-plugin-markdown-transform-body-property-to-html").default,
							({ result }) => {
								return {
									...result,
									body: Render( result.body ),
								};
							},
						],
						// see https://phenomic.io/docs/usage/plugins/
					},
				},

				// *.js => babel + eslint
				{
					test: /\.js$/,
					include: [
						path.resolve(__dirname, "scripts"),
						path.resolve(__dirname, "src"),
					],
					loaders: [
						"babel-loader?cacheDirectory",
						"eslint-loader" + (config.dev ? "?emitWarning" : ""),
					],
				},

				// *.scss => modular (prefixed) css
				{
					test: /\.scss$/,
					include: path.resolve(__dirname, "src"),
					use: ExtractSass.extract({
						use: [
							{
								loader: "css-loader",
							},
							{
								loader: "sass-loader",
							},
							{
								loader: "postcss-loader",
							},
						],
						fallback: "style-loader",
					}),
				},

				// copy assets and return generated path in js
				{
					test: /\.(html|ico|jpe?g|png|gif|eot|otf|webp|ttf|woff|woff2)$/,
					loader: "file-loader",
					query: {
						name: "[path][name].[hash].[ext]",
						context: path.join(__dirname, config.source),
					},
				},

				// svg as raw string to be inlined
				{
					test: /\.svg$/,
					loader: "raw-loader",

				},
			],
		},


		plugins: [
			// sass loader
			ExtractSass,

			// autoprefixer
			new webpack.LoaderOptionsPlugin({
				options: {
					postcss: [ Autoprefixer ],//pkg.pancake.css.browsers, }) ],
					// required to avoid issue css-loader?modules
					// this is normally the default value, but when we use
					// LoaderOptionsPlugin, we must specify it again, otherwise,
					// context is missing (and css modules names can be broken)!
					// context: __dirname,
				},
			}),

			new PhenomicLoaderFeedWebpackPlugin({
				// here you define generic metadata for your feed
				feedsOptions: {
					title: pkg.name,
					site_url: pkg.homepage,
				},
				feeds: {
					// here we define one feed, but you can generate multiple, based
					// on different filters
					"feed.xml": {
						collectionOptions: {
							filter: {
								layout: "Post"
							},
							sort: "date",
							reverse: true,
							limit: 20,
						},
					},
				},
			}),

			new PhenomicLoaderSitemapWebpackPlugin({
				site_url: pkg.homepage,
			}),

			new ExtractTextPlugin({
				filename: "[name].[hash].css",
				disable: config.dev,
			}),

			...config.production && [
				new webpack.optimize.UglifyJsPlugin(
					{
						compress: {
							warnings: false,
						},
					}
				),
			],
		],

		output: {
			path: path.join(__dirname, config.destination),
			publicPath: config.baseUrl.pathname,
			filename: "[name].[hash].js",
		},

		resolve: {
			extensions: [
				".js",
				".json",
			],
		},
	}
}
