/**
 * Error messages map.
 * @const
 * @private
 */
var ERRS = {
  '!conf': 'mapCla requires a config object containing an argv ' + 
    'property',
  '!conf.argv': 'mapCla requires the config object to contain an argv ' + 
    'array'
};

/**
 * Module that clearly maps command line arguments (cla).
 * @module mapCla
 * @param {object} conf
 * @return {object} Mapped command line arguments
 * @example
 * var conf = { argv: process.argv };
 * require('mapCla')(conf);
 */
module.exports = function (conf){
  if (!conf) {
    throw new Error(ERRS['!conf']);
  }
  if (!conf.argv || !(conf.argv instanceof Array)) {
    throw new Error(ERRS['!conf.argv']);
  }

  return {
    /** Current directory, where promon was called. */
    dir_to_watch: conf.argv[2],
    /**
     * IIF that sets cla.custom_comands to an array containing the
     * custom commands entered by the user.
     * @return {array} commands - User entered commands
     */
    custom_commands: (function () {
      var commands = [];

      for (var i = 3; i < conf.argv.length; i++) {
        commands.push(conf.argv[i]);
      }

      return commands;
    }())
  };
};