const Express = require('express')
const Path = require('path')

const Server = Express()

Server
	// dynamic routes
	.get('/dynamic/', ( request, response ) => {
		response.send(' 🔥 Dynamic routing works 🎈🚀😍 ');
	})

	// static assets
	.use( Express.static( Path.normalize(`${ __dirname }/../site/`) ) )

	// fallback to 404
	.get('*', ( request, response ) => {
		response.status( 404 )
		response.sendFile( Path.normalize(`${ __dirname }/../site/404/index.html`) )
	})

	// port
	.listen( 8080, () => {
		console.log(`Server listening on port 8080`)
})
