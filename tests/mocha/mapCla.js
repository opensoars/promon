var assert = require('assert');

var ERRS = {
  '!conf': 'mapCla requires a config object containing an argv ' + 
    'property',
  '!conf.argv': 'mapCla requires the config object to contain an argv ' + 
    'array'
};

describe('mapCla', function () {

  describe('#requiring the module', function () {
    it('returns a function', function () {
      assert.equal(typeof require('../../lib/mapCla'), 'function');
    });
  });

  describe('#calling the module', function () {
    describe('##without an |conf| object', function () {
      it('throws ' + ERRS['!conf'], function () {
        try {
          require('../../lib/mapCla')();
        }
        catch(e) {
          assert.equal(e.message, ERRS['!conf']);
        }
      });
    });
    describe('##with an |conf| object not containing an argv property', function () {
      it('throws ' + ERRS['!conf.argv'], function () {
        try {
          require('../../lib/mapCla')({});
        }
        catch(e) {
          assert.equal(e.message, ERRS['!conf.argv']);
        }
      });
    });
    describe('##with an |conf| object containing an argv property', function () {
      it('maps using the following structure: dir_to_watch: argv[2], custom_commands: argv[3(and up)]', function () {
        var mapped_commands = require('../../lib/mapCla')({
          argv: [
            'not mapped',
            'not mapped',
            'will be dir_to_watch',
            'custom_commands_0',
            'custom_commands_1'
          ]
        });
        assert.equal(mapped_commands.dir_to_watch, 'will be dir_to_watch');
        assert.equal(mapped_commands.custom_commands[0], 'custom_commands_0');
        assert.equal(mapped_commands.custom_commands[1], 'custom_commands_1');
      });
    });
  });

});