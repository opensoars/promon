/**
 * Top level application namespace.
 * @namespace
 */
var app = {};

/**
 * Application modules namespace.
 * @namespace
 */
app.modules = require('lib/util/moduleLoader')({
  Ezlog: 'ezlog'
});