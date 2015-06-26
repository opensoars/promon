/**
 * Top level application namespace.
 * @namespace
 */
var app = {};

app.require = require;

/**
 * Application modules namespace.
 * @namespace
 */
app.modules = require('lib/util/moduleLoader')({
  Ezlog: 'ezlog'
});

app.modules = require('lib/util/moduleLoader')(app)({

});