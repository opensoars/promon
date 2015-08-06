var assert = require('assert');

describe('monitor', function (){

  describe('#requiring the module', function (){
    it('returns an initializer function', function (){
      assert.equal(typeof require('../../lib/monitor'), 'function');
    });
  });

  describe('#calling the module its initializer function', function (){
    it('returns an object', function (){
      assert.equal(typeof require('../../lib/monitor')({

      }), 'object');
    });
  });

});