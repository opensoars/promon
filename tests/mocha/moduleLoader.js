var assert = require('assert');

describe('Module loader', function (){
  describe('#requiring the module', function (){
    it('returns a function', function (){
      assert.equal(
        typeof (require('../../lib/util/moduleLoader')),
        'function'
      );
    });
  });
});