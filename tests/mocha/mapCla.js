var assert = require('assert');

var ERRS = {
  '!app': 'mapCla requires a top level namespace containing' +
    ' an argv property',
  '!app.argv': 'mapCla requires the app namespace to contain an argv array'
};

describe('mapCla', function () {

  describe('#requiring the module', function () {
    it('returns a function', function () {
      assert.equal(typeof require('../../lib/mapCla'), 'function');
    });
  });

  describe('#calling the module', function () {
    describe('##without an |app| object', function () {
      it('throws ' + ERRS['!app'], function () {
        try {
          require('../../lib/mapCla')();
        }
        catch(e) {
          assert.equal(e.message, ERRS['!app']);
        }
      });
    });
    describe('##with an |app| object not containing an argv property', function () {
      it('throws ' + ERRS['!app.argv'], function () {
        try {
          require('../../lib/mapCla')({});
        }
        catch(e) {
          assert.equal(e.message, ERRS['!app.argv']);
        }
      });
    });
    describe('##with an |app| object containing an argv property', function () {
      it('maps using the following structure: cd: argv[2], custom_commands: argv[3(and up)]', function () {
        var mapped_commands = require('../../lib/mapCla')([
          'will be cd',
          'custom_commands_1',
          'custom_commands_2'
        ]);

        assert.equal(mapped_commands.cd, 'will be cd');

        console.log(mapped_commands);
      })
    });

  });

});