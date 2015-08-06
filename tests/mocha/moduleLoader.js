var assert = require('assert');

var ERRS = {
  '!app': 'moduleLoader requires a top level namespace containing' +
    ' the root require function and standard loggers',

  '!app.require': 'moduleLoader requires the app namespace to have a' +
    ' binding to the index.js its require function',

  '!modules_map': 'moduleLoader requires an object with modules to load' +
    ' as its first argument',

  'app.require fail': 'could not load module, error message below'
};

describe('Module loader', function (){

  describe('#requiring the module', function (){
    it('returns a function', function (){
      assert.equal(
        typeof (require('../../lib/util/moduleLoader')),
        'function'
      );
    });
  });

  describe('#initializing the module', function (){
    describe('##without an |app| object as arg 1', function (){
      it('throws ' + ERRS['!app'], function (){
        try {
          require('../../lib/util/moduleLoader')();
        }
        catch(e) {
          assert.equal(e.message, ERRS['!app']);
        }
      });
      describe('##with an |app| object as arg 1, without a require method', function (){
        it('throws ' + ERRS['!app.require'], function (){
          try {
            require('../../lib/util/moduleLoader')({});
          }
          catch(e) {
            assert.equal(e.message, ERRS['!app.require']);
          }
        });
      });
      describe('##with an |app| object as arg 1, with a require method', function (){
        it('returns a function', function (){
          assert.equal(
            typeof (require('../../lib/util/moduleLoader')({ require: function (){} })),
            'function'
          );
        });
      });
    });   
  });

  describe('#calling the initialized module', function (){
    describe('##without an |modules_map| object', function (){
      it('throws ' + ERRS['!modules_map'], function (){
        try {
          require('../../lib/util/moduleLoader')({ require: function (){} })();
        }
        catch(e) {
          assert.equal(e.message, ERRS['!modules_map']);
        }
      });
    });
    describe('##with an |modules_map| object containing existing modules', function (){
      it('returns an object containing the modules in the passed modules_map', function (){
        var modules = require('../../lib/util/moduleLoader')({ require: require })({
          fs: 'fs'
        });

        assert.equal(typeof modules.fs, 'object');
      });
    });
    describe('##with an |modules_map| object containing non existent modules', function (){
      it('throws could not load module, error message below', function (){
        try {
          var t = require('../../lib/util/moduleLoader')({ require: require })({
            fs: 'fss'
          });
        }
        catch(e) {
          assert.notEqual(e.message.indexOf(ERRS['app.require fail']), -1);
        }
      });
    });
  });

});