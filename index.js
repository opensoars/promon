/**
 * Top level application namespace.
 * @namespace
 */
var app = {};

/** Application configuration read from config.json */
app.config = require('./config.json');

/**
 * Index.js its require function so we can do things like app.require('ezlog')
 * from everywhere in the app instead of require('../../ezlog').
 */
app.require = require;

/** Application root directory. */
app.__dirname = __dirname;

/** Utility module that loads key value mapped modules. */
app.moduleLoader = require('./lib/util/moduleLoader')(app);

/**
 * Application modules namespace.
 * @namespace
 */
app.modules = app.moduleLoader({
  fs: 'fs',
  cp: 'child_process'
});

/**
 * Command line arguments.
 * Structure:
 * 0: 'node'
 * 1: '/promon/index.js'
 * 2: CD (where promon is called from)
 * 3 (and up): User entered commands
 */
app.argv = process.argv;

/**
 * Clearly mapped 'command line arguments'.
 */
app.cla = require('./lib/mapCla')({
  argv: app.argv
});

app.monitor = require('./lib/monitor');