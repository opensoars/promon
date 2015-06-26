/**
 * Utility module that loads modules according to passed map of modules.
 * @module util/loadModules
 */


/**
 * Error messages map.
 * @const
 */
var ERRS = {
  '!to_load': 'moduleLoader requires an object with modules to load'
              + ' as its first argument'
};

/**
 * Requires modules and returns them in an object
 * @param {object} to_load - Key value map of modules to load
 * @return {object} modules - Key value map of loaded modules
 * @example
 * app.modules = require('lib/util/moduleLoader')({
 *   fs: 'fs',
 *   cls: 'opensoars_cls'
 * });
 */
function moduleLoader(to_load) {
  if(!to_load || typeof to_load !== 'object')
    throw new Error(errs['!to_load']);
  
  var modules = {};


  return modules;
}


module.exports = moduleLoader;