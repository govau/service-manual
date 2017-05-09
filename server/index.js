const Express = require('express')
const Path = require('path')

const Server = Express()

Server
	.use( Express.static( Path.normalize(`${ __dirname }/../dist/`) ) )
	.get('/dynamic/', ( request, response ) => {
		response.send(' dynamic routing works 🎈🚀😍 ');
	})
	.listen( 8080, () => {
		console.log(`Server listening on port 8080`);
})
