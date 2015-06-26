/**
 * Utility module that loads modules according to passed map of modules.
 * @module util/moduleLoader
 */


/**
 * Error messages map.
 * @const
 */
var ERRS = {
  '!modules_map': 'moduleLoader requires an object with modules to load'
              + ' as its first argument'
};


module.exports = function (app) {

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
      throw new Error(errs['!modules_map']);
    }

    
    for (module_name in modules_map) {
      try {
        //module = require()
      } catch (e) {

      }
    }


    return modules;
  };

}