/**
 * Error messages map.
 * @const
 * @private
 */
var ERRS = {
  '!app': 'mapCla requires a top level namespace containing' +
    ' an argv property',
  '!app.argv': 'mapCla requires the app namespace to contain an argv array'
};

/**
 * Module that clearly maps command line arguments (cla).
 * @module mapCla
 * @param {object} app - Top level application namespace
 * @return {object} Mapped command line arguments
 */
module.exports = function (app){
  if (!app) {
    throw new Error(ERRS['!app']);
  }

  if (!app.argv || !(app.argv instanceof Array)) {
    throw new Error(ERRS['!app.argv']);
  }

  return {
    /** Current directory, where promon was called. */
    cd: app.argv[2],
    /**
     * IIF that sets cla.comands to an array containing the custom commands
     * entered by the user.
     * @return {array} commands - User entered commands
     */
    commands: (function () {
      var commands = [];

      for (var i = 3; i < app.argv.length; i++) {
        commands.push(app.argv[i]);
      }

      return commands;
    }())
  };
};