/**
 * Top level application namespace.
 * @namespace
 */
var app = {};


/** Application configuration read from config.json */
app.config = require('./config.json');


/** Bind root require function to application namespace. */
app.require = require;


/** Bind application root directory to application namespace */
app.__dirname = __dirname;


/** Utility function that loads key value mapped modules. */
app.moduleLoader = require('./lib/util/moduleLoader')(app);


/**
 * Application modules namespace.
 * @namespace
 */
app.modules = app.moduleLoader({
  fs: 'fs'
});