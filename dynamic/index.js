const Express = require('express')
const Path = require('path')

const App = Express()
const Server = App.listen('8080')

const DynamicRoute = Path.normalize(`${ __dirname }/../dist/`)

App.use( Express.static( DynamicRoute ) )
