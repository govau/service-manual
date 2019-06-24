const Express = require('express');
const Path = require('path');

const Server = Express();

// handle some redirections
var redirect_map = require('./redirect-map.json');
Server.locals.redirect_map = redirect_map;
for (var key in redirect_map) {
	Server.get(key, (req, res) => {
		res.redirect(301, Server.locals.redirect_map[req.path]);
	});
}


/**
 * Check that server is requested securely middle-ware
 *
 * @param  {object}   request  - Express request object
 * @param  {object}   response - Express response object
 * @param  {function} next     - Express next function
 *
 * @return {object}            - Express object
 */
const ForwardSSL = ( request, response, next ) => {
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
	.all( '*', ForwardSSL )

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
