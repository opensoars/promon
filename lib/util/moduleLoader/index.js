/**
 * Utility module that loads modules according to passed map of modules.
 * @module util/moduleLoader
 */

/**
 * Module initializer.
 * @param {object} app - Top level application namespace
 */
module.exports = function (app) {

  /**
   * Error messages map.
   * @const
   * @private
   */
  var ERRS = {
    '!app': 'moduleLoader requires a top level namespace containing' +
      ' the root require function and standard loggers',

    '!app.require': 'moduleLoader requires the app namespace to have a' +
      ' binding to the index.js its require function',

    '!modules_map': 'moduleLoader requires an object with modules to load' +
      ' as its first argument',

    'app.require fail': 'could not load module, error message below'
  };

  if (!app || typeof app !== 'object') {
    throw new Error(ERRS['!app']);
  }
  if (!app.require || typeof app.require !== 'function') {
    throw new Error(ERRS['!app.require']);
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
  function moduleLoader(modules_map) {
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
          module = app.require(modules_map[module_name]);
          modules[module_name] = module;
        } catch (e) {
          throw new Error(ERRS['app.require fail'] + '\n' + e.message);
        }
      }
    }
    return modules;
  }

  return moduleLoader;
};