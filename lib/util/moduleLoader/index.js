/**
 * Utility module that loads modules according to passed map of modules.
 * @module util/moduleLoader
 */

/**
 * Module initializer.
 * @param {object} conf
 * @example
 * var conf = { require: require };
 * require('moduleLoader')(conf);
 */
module.exports = function (conf) {

  /**
   * Error messages map.
   * @const
   * @private
   */
  var ERRS = {
    '!conf': 'moduleLoader requires a config object containing' +
      ' the root require function and standard loggers',

    '!conf.require': 'moduleLoader requires the confif object to have a' +
      ' binding to the index.js its require function',

    '!modules_map': 'moduleLoader requires an object with modules to load' +
      ' as its first argument',

    'conf.require fail': 'could not load module, error message below'
  };

  if (!conf || typeof conf !== 'object') {
    throw new Error(ERRS['!conf']);
  }
  if (!conf.require || typeof conf.require !== 'function') {
    throw new Error(ERRS['!conf.require']);
  }

  /**
   * Requires modules and returns them in an object
   * @param {object} modules_map - Key value map of modules to load
   * @return {object} modules - Key value map of loaded modules
   * @example
   * app.modules = require('lib/util/moduleLoader')({
   *   fs: 'fs',
   *   cls: 'opensoars_cls'
   * });
   */
  return function moduleLoader(modules_map) {
    var modules = {},
        module_name,
        module;

    if (!modules_map || typeof modules_map !== 'object') {
      throw new Error(ERRS['!modules_map']);
    }

    for (module_name in modules_map) {
      /* istanbul ignore else */
      if( modules_map.hasOwnProperty(module_name) ){
        try {
          module = conf.require(modules_map[module_name]);
          modules[module_name] = module;
        } catch (e) {
          throw new Error(ERRS['conf.require fail'] + '\n' + e.message);
        }
      }
    }
    return modules;
  };
};