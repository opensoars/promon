/**
 * Top level application namespace.
 * @namespace
 */
var app = {};

/** Bind root require function to application namespace. */
app.require = require;

/** Utility function that loads key value mapped modules. */
app.moduleLoader = require('./lib/util/moduleLoader')(app);

/**
 * Application modules namespace.
 * @namespace
 */
app.modules = app.moduleLoader({
  fs: 'fs'
});