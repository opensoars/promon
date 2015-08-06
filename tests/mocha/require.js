var assert = require('assert');

describe('Requiring the module', function (){
  it('returns an empty object since its an command line tool', function (){
    var required_module = require('../../index.js');

    var key_count = 0,
        key;

    for (key in required_module) {
      key_count++;
    }

    assert.equal(key_count, 0);
  });
});