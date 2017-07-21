const Express = require('express');
const Path = require('path');

const Server = Express();


/**
 * Check that server is requested securely middle-ware
 *
 * @param  {object} request  - Express request object
 * @param  {object} response - Express response object
 *
 * @return {object}          - Express object
 */
const forwardSSL = ( request, response, next ) => {
	if( request.headers['x-forwarded-proto'] === 'https' ) {
		return next();
	}

	response.redirect(`https://${ request.headers.host }${ request.originalUrl }`);
};


/**
 * Start server
 */
Server
	// First we make sure all requests come through HTTPS
	.all( '*', forwardSSL )

	// Then we add dynamic routes that overwrite static ones
	.get( '/dynamic/', ( request, response ) => {
		response.send(' 🔥 Dynamic routing works 🎈🚀😍 ');
	})

	// Now static assets
	.use( Express.static( Path.normalize(`${ __dirname }/../site/`) ) )

	// In the end we catch all missing requests
	.get( '*', ( request, response ) => {
		response.status( 404 );
		response.sendFile( Path.normalize(`${ __dirname }/../site/404/index.html`) );
	})

	// Now let’s start this thing!
	.listen( 8080, () => {
		console.log(`Server listening on port 8080`);
});
